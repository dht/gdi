import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';

type ITableContext = {
    widths: number[];
    showFilters: boolean;
    patchState: (change: Partial<ITableContext>) => void;
};

const initialState: ITableContext = {
    widths: [],
    showFilters: false,
    patchState: () => {},
};

export const TableContext = createContext<ITableContext>(initialState);

type TableProps = {
    children: JSX.Element;
};

export const TableContextProvider = (props: TableProps) => {
    const [state, patchState] = useSetState<ITableContext>(initialState);

    const cValue = useMemo(
        () => ({
            ...state,
            patchState,
        }),
        [state]
    );

    return (
        <TableContext.Provider value={cValue}>
            {props.children}
        </TableContext.Provider>
    );
};
