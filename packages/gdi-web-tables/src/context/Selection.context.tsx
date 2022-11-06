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
    focusedId: string;
    callbacks: {
        onSelect: (itemId: string) => void;
        onSelectionClear: () => void;
        onFocusedSet: (itemId: string) => void;
        onFocusedClear: () => void;
    };
};

const initialValue: ISelectionContext = {
    state: [],
    focusedId: '',
    callbacks: {
        onSelect: (itemId: string) => {},
        onSelectionClear: () => {},
        onFocusedSet: (itemId: string) => {},
        onFocusedClear: () => {},
    },
};

export const SelectionContext = createContext<ISelectionContext>(initialValue);

export const SelectionContextProvider = (
    props: WithChildren<SelectionContextProps>
) => {
    const { mode, onSelectionChange } = props;

    const selectionOptions = useMemo(
        () => ({
            enabled: mode !== 'collection',
            allowMultiple: mode === 'multiple',
            allowEmpty: mode === 'browse' || mode === 'multiple',
            noUnselect: mode === 'browse',
        }),
        []
    );

    const [
        selectedIds,
        focusedId,
        {
            onClick: onSelectionClick,
            onClear: onSelectionClear,
            onFocus: onSelectionFocus,
            onFocusClear: onSelectionFocusClear,
        },
    ] = useSelection([], selectionOptions);

    const callbacks = useMemo(
        () => ({
            onSelect: (itemId: string) => {
                if (onSelectionChange) {
                    onSelectionChange([itemId]);
                }

                onSelectionClick(itemId);
            },
            onSelectionClear: () => {
                onSelectionClear();
            },
            onFocusedSet: (itemId: string) => {
                onSelectionFocus(itemId);
            },
            onFocusedClear: () => {
                onSelectionFocusClear();
            },
        }),
        [selectedIds, focusedId]
    );

    const value = useMemo(
        () => ({
            state: selectedIds,
            focusedId,
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
