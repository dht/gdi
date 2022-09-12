import React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';

type DataGridContext = {
    widths: number[];
    showFilters: boolean;
    patchState: (change: Partial<DataGridContext>) => void;
};

const initialState: DataGridContext = {
    widths: [],
    showFilters: false,
    patchState: () => {},
};

export const DataGridContext = createContext<DataGridContext>(initialState);

type DataGridProps = {
    children: JSX.Element;
};

export const DataGridContextProvider = (props: DataGridProps) => {
    const [state, patchState] = useSetState<DataGridContext>(initialState);

    return (
        <DataGridContext.Provider
            value={{
                ...state,
                patchState,
            }}
        >
            {props.children}
        </DataGridContext.Provider>
    );
};
