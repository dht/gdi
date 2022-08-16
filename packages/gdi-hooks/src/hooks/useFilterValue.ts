import { useMemo, useState } from 'react';
import { useSetState } from 'react-use';

type UseFilterValueCallbacks = {
    onSearch: (value?: string) => void;
    patchSort: (value: Partial<ISortValue>) => void;
    onFilter: (filterId: string, optionId: string, remove?: boolean) => void;
    onFilterClear: () => void;
    onSort: (optionId: string) => void;
};

type UseFilterValueReturn = [ITrio, UseFilterValueCallbacks];

export function useFilterValue(config: IFilterConfig): UseFilterValueReturn {
    const [search, setSearch] = useState<string>('');
    const [sort, patchSort] = useSetState<ISortValue>({
        id: '',
        direction: 'asc',
    });

    const [idsPerFilter, patchIdsPerFilter] = useSetState<IFilterValue>({});

    const callbacks = useMemo(
        () => ({
            onSearch: (value: string = '') => {
                setSearch(value);
            },
            patchSort: (value: Partial<ISortValue>) => {
                patchSort(value);
            },
            onFilter: (
                filterId: string,
                optionId: string,
                remove?: boolean
            ) => {
                const fieldConfig = config.fields.find(i => i.id === filterId); // prettier-ignore
                const { allowMultiple = false } = fieldConfig || {};

                const currentValue = idsPerFilter[filterId] || [];
                let nextValue = [...currentValue];

                if (remove) {
                    nextValue = nextValue.filter((i) => i !== optionId);
                } else {
                    if (allowMultiple) {
                        nextValue.push(optionId);
                    } else {
                        nextValue = [optionId];
                    }
                }

                patchIdsPerFilter({
                    [filterId]: nextValue,
                });
            },
            onFilterClear: () => {
                const emptyValue = Object.keys(idsPerFilter).reduce(
                    (output, key) => {
                        output[key] = [];
                        return output;
                    },
                    {} as Json
                );
                patchIdsPerFilter(emptyValue);
            },
            onSort: (optionId: string) => {
                const { id, direction } = sort;

                let nextDirection: 'asc' | 'desc' = 'asc';

                if (id === optionId && direction === 'asc') {
                    nextDirection = 'desc';
                }

                patchSort({
                    id: optionId,
                    direction: nextDirection,
                });
            },
        }),
        [search, sort, idsPerFilter]
    );

    const value = useMemo(() => {
        return {
            search,
            sort,
            filter: idsPerFilter,
        };
    }, [search, sort, idsPerFilter]);

    return [value, callbacks];
}
