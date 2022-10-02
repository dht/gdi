import React, { useMemo } from 'react';
import { createContext } from 'react';
import { WithChildren } from '../types';
import { useSelection } from '@gdi/hooks';

export type SelectionContextProps = {
    mode: ISelectionMode;
    initialValue?: string[];
    onSelectionChange?: (selectedIds: string[]) => void;
};

type ISelectionContext = {
    state: string[];
    callbacks: {
        onSelect: (itemId: string) => void;
        onSelectionClear: () => void;
    };
};

const initialValue: ISelectionContext = {
    state: [],
    callbacks: {
        onSelect: (itemId: string) => {},
        onSelectionClear: () => {},
    },
};

export const SelectionContext = createContext<ISelectionContext>(initialValue);

export const SelectionContextProvider = (
    props: WithChildren<SelectionContextProps>
) => {
    const { mode } = props;

    const selectionOptions = useMemo(
        () => ({
            enabled: mode !== 'collection',
            allowMultiple: mode === 'multiple',
            allowEmpty: mode === 'browse' || mode === 'multiple',
        }),
        []
    );

    const [
        selectedIds,
        { onClick: onSelectionClick, onClear: onSelectionClear },
    ] = useSelection([], selectionOptions);

    const callbacks = useMemo(
        () => ({
            onSelect: (itemId: string) => {
                onSelectionClick(itemId);
            },
            onSelectionClear: () => {
                onSelectionClear();
            },
        }),
        []
    );

    const value = useMemo(
        () => ({
            state: selectedIds,
            callbacks,
        }),
        [callbacks, selectedIds]
    );

    return (
        <SelectionContext.Provider value={value}>
            {props.children}
        </SelectionContext.Provider>
    );
};
