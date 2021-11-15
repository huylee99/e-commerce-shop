import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { parseQuery } from '../helpers/URLHelpers';

const useQuery = () => {
  let [, setSearchParams] = useSearchParams();

  const params = window.location.search;

  const value = useMemo(() => (params ? parseQuery(params) : null), [params]);

  const setValue = useCallback(
    newValue => {
      setSearchParams(newValue, { replace: true });
    },
    [setSearchParams]
  );

  return [value, setValue];
};

export { useQuery };
