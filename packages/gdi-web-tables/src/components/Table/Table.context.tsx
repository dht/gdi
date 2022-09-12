import React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';

type TableContext = {
    widths: number[];
    showFilters: boolean;
    patchState: (change: Partial<TableContext>) => void;
};

const initialState: TableContext = {
    widths: [],
    showFilters: false,
    patchState: () => {},
};

export const TableContext = createContext<TableContext>(initialState);

type TableProps = {
    children: JSX.Element;
};

export const TableContextProvider = (props: TableProps) => {
    const [state, patchState] = useSetState<TableContext>(initialState);

    return (
        <TableContext.Provider
            value={{
                ...state,
                patchState,
            }}
        >
            {props.children}
        </TableContext.Provider>
    );
};
