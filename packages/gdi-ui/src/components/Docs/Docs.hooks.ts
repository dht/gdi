import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useMount } from 'react-use';

export const useDocs = (baseUrl: string) => {
  return useFetch<Json>(`${baseUrl}/index.json`, true);
};

export const useDoc = (baseUrl: string, docPath: string) => {
  return useFetch<string>(`${baseUrl}/${docPath}`);
};

export function useHash(initialHash: string) {
  const windowHash = window.location.hash.replace('#', '');
  const [hash, setHash] = useState(windowHash || initialHash);

  useEffect(() => {
    const handler = () => setHash(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  function changeHash(value: string) {
    window.location.hash = value;
  }

  // makes sure the hash is not empty on first render
  useMount(() => {
    if (hash === initialHash) {
      changeHash(initialHash);
    }
  });

  return [hash, changeHash] as const;
}
