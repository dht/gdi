import React, { FC } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { SheetProps } from '../components/Sheet/Sheet';
import { sortBy } from 'shared-base';
import { Coords } from '../types';
import { useDelete, useNudge } from '@gdi/hooks';
import { invokeEvent } from 'shared-base';
import { useMemo } from '@gdi/hooks';

type ISheetContext = {
    selectedCoords: Coords | null;
    editableCoords: Coords | null;
    lastCoords: Coords | null;
    selectedRowIndex: number | null;
    sortBy: string;
    sortOrder: 'asc' | 'desc' | 'none';
    savedValue: string | number | boolean;
    isNoneEmptyCell: boolean;
    patchState: (change: Partial<ISheetContext>) => void;
} & Callbacks;

const initialState: ISheetContext = {
    selectedCoords: { rowIndex: 0, columnIndex: 0 },
    editableCoords: null,
    lastCoords: { rowIndex: 0, columnIndex: 0 },
    sortBy: '_createdDate',
    sortOrder: 'asc',
    savedValue: '',
    selectedRowIndex: null,
    isNoneEmptyCell: false,
    patchState: () => {},
    onChange: (rowId: string, change: Json) => {},
    startEditing: (coords: Coords) => {},
    stopEditing: (nudgeDown?: boolean) => {},
    cancelEditing: () => {},
    onMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => {},
    onDoubleClick: (ev: React.MouseEvent<HTMLDivElement>) => {},
};

export const SheetContext = createContext<ISheetContext>(initialState);

type SheetContextProvider = SheetProps & { inner: FC<SheetProps> };

export const SheetContextProvider = (props: SheetContextProvider) => {
    const { data, inner: Child } = props;

    const [state, patchState] = useSetState<ISheetContext>(initialState);

    const sortedData = useMemo(() => {
        if (state.sortOrder === 'none') {
            return data;
        }
        return [...data].sort(sortBy(state.sortBy, state.sortOrder));
    }, [data, state.sortBy, state.sortOrder]);

    const nudge = useNudge(
        state.selectedCoords,
        state.lastCoords,
        (newCoords: Coords, force?: boolean) => {
            if (state.editableCoords && state.isNoneEmptyCell && !force) {
                return;
            }
            callbacks.selectCell(newCoords, force);
        },
        [state]
    );

    const callbacks = useMemo(
        () => ({
            startEditing: (coords: Coords | null) => {
                patchState({
                    editableCoords: coords,
                });
            },
            stopEditing: (nudgeDown?: boolean) => {
                if (!state.editableCoords) {
                    return;
                }

                invokeEvent('STOP_EDITING');

                patchState({ editableCoords: null });

                if (nudgeDown) {
                    nudge('ArrowDown', true);
                }
            },
            onChange: (itemId: string, change: Json) => {
                if (itemId === '*') {
                    props.onNew(change);
                } else {
                    props.onChange(itemId, change);
                }
            },
            cancelEditing: () => {
                callbacks.stopEditing();
            },
            selectCell: (coords: Coords | null, silent?: boolean) => {
                if (state.editableCoords && !silent) {
                    callbacks.stopEditing();
                }
                patchState({
                    selectedCoords: coords,
                    selectedRowIndex: null,
                });
            },
            selectRow: (coords: Coords) => {
                patchState({
                    selectedCoords: null,
                    selectedRowIndex: coords.rowIndex,
                });
            },
            onMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => {
                const coords = findCellCoords(ev);

                if (!coords) {
                    return;
                }
                if (coords.columnIndex === -1) {
                    callbacks.selectRow(coords);
                } else {
                    callbacks.selectCell(coords);
                }
            },
            onDoubleClick: (ev: React.MouseEvent<HTMLDivElement>) => {
                const coords = findCellCoords(ev);
                if (!coords) {
                    return;
                }
                callbacks.startEditing(coords);
            },
        }),
        [state, sortedData]
    );

    useDelete(() => {
        if (state.selectedRowIndex === null) {
            return;
        }
        const item = sortedData[state.selectedRowIndex];
        if (!item) {
            return;
        }

        props.onDelete(item.id);
    }, [state]);

    const cValue = useMemo(() => {
        return {
            ...state,
            ...callbacks,
            patchState,
        };
    }, [state, callbacks, patchState]);

    return (
        <SheetContext.Provider value={cValue}>
            <Child {...props} data={sortedData} />
        </SheetContext.Provider>
    );
};

type Callbacks = {
    startEditing: (coords: Coords) => void;
    stopEditing: (nudgeDown?: boolean) => void;
    cancelEditing: () => void;
    onChange: (rowId: string, change: Json) => void;
    onMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => void;
    onDoubleClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
};

const findCellCoords = (ev: React.MouseEvent<HTMLElement>): Coords | null => {
    const element = findElementByClassNameInTree(ev.target, 'cell');

    if (!element) {
        return null;
    }

    const regex = /row_([0-9-]+)_col_([0-9-]+)/g;
    const className = [...element.classList].find((c) => c.match(regex));

    if (!className) {
        return null;
    }

    const match = regex.exec(className);

    if (!match) {
        return null;
    }

    return {
        rowIndex: parseInt(match[1], 10),
        columnIndex: parseInt(match[2], 10),
    };
};

const findElementByClassNameInTree = (el: any, className: string) => {
    if (el.classList.contains('cell')) {
        return el;
    }

    let cursor = el;

    do {
        cursor = cursor.parentNode;
    } while (cursor && !cursor.classList.contains('cell'));

    return cursor;
};
