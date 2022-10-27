import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import {
    IFilterConfig,
    IFilterOptions,
    IFilterState,
    WithChildren,
} from '../types';
import { prompt } from '@gdi/web-base-ui';
import { useFilterValue, useFilterData } from '@gdi/hooks';

export type FilterContextProps = {
    data?: Json[];
    config: IFilterConfig;
    options: IFilterOptions;
    allOptions?: Json;
};

type IFilterContext = {
    patchState: (change: Partial<IFilterState>) => void;
    data?: Json[];
    config: IFilterConfig;
    options: IFilterOptions;
    state: IFilterState;
    callbacks: {
        onSearch: (search?: string) => void;
        onSearchClear: () => void;
        onTagClick: (tag: string) => void;
        onTagClear: () => void;
        toggleFilter: () => void;
        togglePreview: () => void;
        onFilter: (
            filterId: string,
            optionId: string,
            remove?: boolean
        ) => void;
        onFilterClear: () => void;
        onSort: (optionId: string) => void;
    };
};

const initialValue: IFilterContext = {
    patchState: () => {},
    data: [],
    config: {
        id: '',
        fields: [],
    },
    options: {},
    state: {
        header: '',
        tag: '',
        showFilter: false,
        showPreview: false,
        trio: {
            sort: {
                id: '',
                direction: 'asc',
            },
            search: '',
            filter: {},
        },
        selectedIds: [],
        allOptions: {},
    },
    callbacks: {
        onSearch: (search?: string) => {},
        onSearchClear: () => {},
        onTagClick: (tag: string) => {},
        onTagClear: () => {},
        toggleFilter: () => {},
        togglePreview: () => {},
        onFilter: (filterId: string, optionId: string) => {},
        onFilterClear: () => {},
        onSort: (optionId: string) => {},
    },
};

export const FilterContext = createContext<IFilterContext>(initialValue);

export const FilterContextProvider = (
    props: WithChildren<FilterContextProps>
) => {
    const { data = [], allOptions = {} } = props;

    const [state, patchState] = useSetState<IFilterState>({
        ...initialValue.state,
    });

    const configAndOptions = useFilterConfig(
        props.config,
        props.options,
        allOptions
    );

    const [trio, filterCallbacks] = useFilterValue(configAndOptions.config);

    const filteredData = useFilterData(configAndOptions.config, data, trio);

    let response;

    const callbacksFilter = useMemo(
        () => ({
            onSearch: (search?: string) => {
                filterCallbacks.onSearch(search);
            },
            onSearchClear: () => {
                filterCallbacks.onSearch('');
            },
            onTagClick: async (_currentTag: string) => {
                response = await prompt.input('Choose a tag');
                if (response.didCancel) {
                    return;
                }

                patchState({ tag: response.value as string });
            },
            onTagClear: () => {
                patchState({ tag: '' });
            },
            toggleFilter: () => {
                patchState({
                    showFilter: !state.showFilter,
                });
            },
            togglePreview: () => {
                patchState({
                    showPreview: !state.showPreview,
                });
            },
            onFilter: (
                filterId: string,
                optionId: string,
                remove?: boolean
            ) => {
                filterCallbacks.onFilter(filterId, optionId, remove);
            },
            onFilterClear: () => {
                filterCallbacks.onFilterClear();
            },
            onSort: (optionId: string) => {
                filterCallbacks.onSort(optionId);
            },
        }),
        [state, filterCallbacks]
    );

    const value = useMemo(
        () => ({
            ...configAndOptions,
            state: {
                ...state,
                trio,
                allOptions,
            },
            callbacks: callbacksFilter,
            patchState,
            data: filteredData,
        }),
        [trio, filteredData, callbacksFilter, state]
    );

    return (
        <FilterContext.Provider value={value}>
            {props.children}
        </FilterContext.Provider>
    );
};

function useFilterConfig(
    config: IFilterConfig,
    options: IFilterOptions,
    allOptions: Json = {}
) {
    const configValue = useMemo(() => {
        const fields = config.fields.map((field) => {
            const { optionSelectorId } = field;

            const options = optionSelectorId
                ? allOptions[optionSelectorId]
                : field.options;

            return {
                ...field,
                options,
            };
        });

        return {
            config: {
                ...initialValue.config,
                ...config,
                fields,
            },
            options: {
                ...initialValue.options,
                ...options,
            },
        };
    }, []);

    return configValue;
}
