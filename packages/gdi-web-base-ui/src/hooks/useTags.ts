import { uniq } from 'lodash';
import { useMemo } from 'react';

export function useTags(items: Json[]) {
    const tags = useMemo(() => {
        const output: string[] = [];

        items.forEach((item) => {
            output.push(...item.tags);
        });

        output.push('All');

        return uniq(output)
            .sort()
            .map((tag) => ({
                id: tag,
                text: tag,
            }));
    }, [items]);

    return tags;
}
