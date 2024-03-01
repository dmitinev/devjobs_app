import { ReactNode, createContext, useMemo, useState } from 'react';

interface SearchDataContext {
  searchDataName: string;
  searchDataLocation: string;
  isFullTime: boolean;
  handleSearchDataName: (value: string) => void;
  handleSearchDatLocation: (value: string) => void;
  handleIsFullTime: (value: boolean) => void;
}

interface SearchDataContextProviderProps {
  children: ReactNode;
}

export const SearchDataContext = createContext<SearchDataContext>({
  searchDataName: '',
  searchDataLocation: '',
  isFullTime: false,
  handleSearchDataName: () => {},
  handleSearchDatLocation: () => {},
  handleIsFullTime: () => {},
});

const SearchDataContextProvider = ({
  children,
}: SearchDataContextProviderProps) => {
  const [searchData, setSearchData] = useState({
    searchDataName: '',
    searchDataLocation: '',
    isFullTime: false,
  });

  const valueToPass: SearchDataContext = useMemo(() => {
    return {
      searchDataName: searchData.searchDataName,
      searchDataLocation: searchData.searchDataLocation,
      isFullTime: searchData.isFullTime,
      handleSearchDataName: (value: string) => {
        setSearchData((prev) => ({ ...prev, searchDataName: value }));
      },
      handleSearchDatLocation: (value: string) => {
        setSearchData((prev) => ({ ...prev, searchDataLocation: value }));
      },
      handleIsFullTime: (value: boolean) => {
        setSearchData((prev) => ({ ...prev, isFullTime: value }));
      },
    };
  }, [
    searchData.searchDataName,
    searchData.searchDataLocation,
    searchData.isFullTime,
  ]);

  return (
    <SearchDataContext.Provider value={valueToPass}>
      {children}
    </SearchDataContext.Provider>
  );
};

export default SearchDataContextProvider;
