import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Hooktype = number | string | boolean | object;
type HookArray = Hooktype[];

const useLocalStorage = <T extends Hooktype | HookArray>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(getValue);

  function getValue(): T {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue) as T;
    } else {
      return defaultValue;
    }
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
