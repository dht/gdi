import { useMemo } from 'react';

export function useItems(data: Json[]) {
  const categories = useMemo(() => {
    const output: string[] = [];

    data.forEach((item: Json) => {
      if (!output.includes(item.category)) {
        output.push(item.category);
      }
    });

    return output;
  }, [data]);

  const itemsPerCategory = useMemo(() => {
    const output: any = {};

    data.forEach((item: Json) => {
      output[item.category] = output[item.category] ?? [];
      output[item.category].push(item);
    });

    return output;
  }, [data]);

  return [categories, itemsPerCategory];
}
