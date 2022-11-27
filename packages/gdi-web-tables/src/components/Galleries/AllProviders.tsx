import React from 'react';
import { FilterContextProvider } from '../../context/Filter.context';
import { SelectionContextProvider } from '../../context/Selection.context';
import { useMemo } from '@gdi/hooks';

export type AllProvidersProps = {
    id: string;
    definitions: ICrudDefinitions;
    data: Json[];
    callbacks: {
        onSelectionChange: (ids: string[]) => void;
    };
    children: JSX.Element | JSX.Element[];
    allOptions?: Json;
};

export function AllProviders(props: AllProvidersProps) {
    const { data, callbacks, allOptions, definitions } = props;

    const optionsFilter = useMemo(() => ({}), []);

    return (
        <SelectionContextProvider
            initialMode='none'
            initialValue={[]}
            onSelectionChange={callbacks.onSelectionChange}
        >
            <FilterContextProvider
                data={data}
                config={definitions.filters}
                options={optionsFilter}
                allOptions={allOptions}
                multiBar={{}}
            >
                {props.children}
            </FilterContextProvider>
        </SelectionContextProvider>
    );
}

export default AllProviders;
