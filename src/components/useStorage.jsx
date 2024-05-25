import { useState, useEffect } from 'react';

function useStorage(key, initialValue) {

  const getInitialValue = () => {
    const localStorageValue = localStorage.getItem(key);
    const sessionStorageValue = sessionStorage.getItem(key);

    if (localStorageValue !== null) return JSON.parse(localStorageValue);
    if (sessionStorageValue !== null) return JSON.parse(sessionStorageValue);

    return initialValue;
  };

  const [value, setValue] = useState(getInitialValue);


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStorage;
