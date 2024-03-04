import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { JobVacancy } from '../types';

const useApi = (url: string): [JobVacancy[], boolean, boolean] => {
  const [data, setData] = useState<JobVacancy[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorPresent, setErrorPresent] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response: AxiosResponse = await axios(url);
        const data = (await response.data) as JobVacancy[];
        setData(data);
      } catch (error) {
        setErrorPresent(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, isLoading, errorPresent];
};

export default useApi;
