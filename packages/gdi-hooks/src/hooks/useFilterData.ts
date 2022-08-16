import { useMemo, useState } from 'react';
import { useSetState } from 'react-use';
import Fuse from 'fuse.js';
import { filterByConfig } from '../utils/filter';

export function useFilterData(
    config: IFilterConfig,
    data: Json[],
    params: ITrio
): Json[] {
    const fuse = useMemo(
        () =>
            new Fuse(data, {
                keys: ['title', 'tags'],
            }),
        [data]
    );

    const filteredData = useMemo(() => {
        let output: Json[];
        const isSearchEmpty = params.search.length < 2;

        output = isSearchEmpty
            ? data
            : fuse.search(params.search).map((i) => i.item);

        return filterByConfig(config, output, params);
    }, [params.search, params.sort, params.filter, data]);

    return filteredData;
}
