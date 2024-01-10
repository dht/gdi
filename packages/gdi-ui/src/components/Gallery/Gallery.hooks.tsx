import { useMemo } from 'react';
import { useFuzzySearch } from '../CommandPalette/hooks/useFuzzySearch';

export function useItems(boards: Json[], q: string, filter: string) {
  const search = useFuzzySearch(boards, ['name', 'description', 'tags']);

  const items = useMemo(() => {
    let output = boards;

    if (q && q.length >= 3) {
      output = search(q || '').map((item: any) => item.item);
    }

    if (filter) {
      output = output.filter((item: any) => {
        const tags = item.tags || [];
        return tags.includes(filter);
      });
    }

    return output;
  }, [filter, search]);

  return items;
}
