import React from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';

type ITableContext = {
    widths: number[];
    showFilters: boolean;
    selectedId: string;
    patchState: (change: Partial<ITableContext>) => void;
};

const initialState: ITableContext = {
    widths: [],
    showFilters: false,
    selectedId: '',
    patchState: () => {},
};

export const TableContext = createContext<ITableContext>(initialState);

type TableProps = {
    children: JSX.Element;
};

export const TableContextProvider = (props: TableProps) => {
    const [state, patchState] = useSetState<ITableContext>(initialState);

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
