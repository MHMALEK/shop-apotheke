import { useEffect, useState } from 'react';
import httpClient from '..';
import { useApiType } from '../types';
// create cache for older requests in same tab and same browser session
const cache = {};
const useAPI: useApiType = (method, url, ...params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (cache[url]) {
      const data = cache[url];
      setData(data);
    } else {
      try {
        setIsLoading(true);
        setData(await httpClient({ method, url, ...params }));
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, isLoading, error];
};

export default useAPI;
