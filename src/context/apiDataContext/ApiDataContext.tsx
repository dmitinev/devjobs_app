import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { ISearchDataContext } from '../../context/searchDataContext/SearchDataContext';
import useApi from '../../hooks/useApi';
import { JobVacancy } from '../../types';

type FilterParams = Pick<
  ISearchDataContext,
  'searchDataName' | 'searchDataLocation' | 'isFullTime'
>;

interface ApiDataContext {
  filteredApiData: JobVacancy[];
  originalApiData: JobVacancy[];
  isLoading: boolean;
  errorPresent: boolean;
  // eslint-disable-next-line no-unused-vars
  setFilteredApiData: (params: FilterParams) => void;
}

interface ApiDataContextProviderProps {
  children: ReactNode;
}

export const ApiDataContext = createContext<ApiDataContext>({
  filteredApiData: [],
  setFilteredApiData: () => {},
  errorPresent: false,
  isLoading: false,
  originalApiData: [],
});

export const ApiDataContextProvider = ({
  children,
}: ApiDataContextProviderProps) => {
  const [data, loading, error] = useApi('/devjobs_app/data.json');
  const [filteredData, setFilteredData] = useState<JobVacancy[]>([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const setFilteredApiData = ({
    searchDataName,
    searchDataLocation,
    isFullTime,
  }: FilterParams) => {
    setFilteredData(
      data.filter((vacancy) => {
        if (
          (vacancy.position.toLowerCase().includes(searchDataName) ||
            vacancy.company.toLowerCase().includes(searchDataName)) &&
          vacancy.location.toLowerCase().includes(searchDataLocation) &&
          (isFullTime ? vacancy.contract === 'Full Time' : true)
        ) {
          return vacancy;
        } else {
          return null;
        }
      }),
    );
  };

  const valueToPass: ApiDataContext = useMemo(() => {
    return {
      filteredApiData: filteredData,
      originalApiData: data,
      setFilteredApiData: setFilteredApiData,
      isLoading: loading,
      errorPresent: error,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData, data, loading, error]);

  return (
    <ApiDataContext.Provider value={valueToPass}>
      {children}
    </ApiDataContext.Provider>
  );
};
