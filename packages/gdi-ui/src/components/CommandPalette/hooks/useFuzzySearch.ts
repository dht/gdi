import { useCallback, useMemo } from 'react';
import Fuse from 'fuse.js';

export function useFuzzySearch<T>(list: T[], keys: string[], threshold = 0.3) {
  const fuse = useMemo(
    () =>
      new Fuse(list, {
        includeScore: true,
        shouldSort: true,
        threshold,
        keys,
      }),
    [list, keys]
  );

  const search = useCallback(
    (term: string) => {
      return fuse.search(term);
    },
    [fuse]
  );

  return search;
}

export function useFuzzySearchQ<T>(list: T[], keys: string[], searchTerm: string) {
  const search = useFuzzySearch(list, keys);

  const filteredItems = useMemo(() => {
    return searchTerm ? search(searchTerm).map((fuseResult) => fuseResult.item) : list;
  }, [search, searchTerm]);

  return filteredItems;
}
