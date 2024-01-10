import React, { useMemo, useState } from 'react';
import { createContext } from 'react';
import { ISelectionMode, WithChildren } from '../Trello.types';
import { useSelection } from '../_hooks';

export type SelectionContextProps = {
  initialMode: ISelectionMode;
  initialValue?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
};

type ISelectionContext = {
  state: string[];
  focusedId: string;
  selectionMode: ISelectionMode;
  callbacks: {
    onSelect: (itemId: string) => void;
    onSelectionClear: () => void;
    onFocusedSet: (itemId: string) => void;
    onFocusedClear: () => void;
    onChangeMode: (selectionMode: ISelectionMode) => void;
  };
};

const initialValue: ISelectionContext = {
  state: [],
  focusedId: '',
  selectionMode: 'none',
  callbacks: {
    onSelect: (itemId: string) => {},
    onSelectionClear: () => {},
    onFocusedSet: (itemId: string) => {},
    onFocusedClear: () => {},
    onChangeMode: (selectionMode: ISelectionMode) => {},
  },
};

export const SelectionContext = createContext<ISelectionContext>(initialValue);

export const SelectionContextProvider = (props: WithChildren<SelectionContextProps>) => {
  const { initialMode = 'none', onSelectionChange } = props;
  const [mode, setMode] = useState<ISelectionMode>(initialMode);

  const selectionOptions = useMemo(
    () => ({
      enabled: mode !== 'none',
      allowMultiple: mode === 'multiple',
      allowEmpty: mode === 'choose' || mode === 'multiple',
      noUnselect: mode === 'choose',
    }),
    [mode]
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
      onChangeMode: (selectionMode: ISelectionMode) => {
        setMode(selectionMode);
      },
    }),
    [selectedIds, focusedId, mode],
    'selection.callbacks|selectedIds,focusedId,mode'
  );

  const value = useMemo(
    () => ({
      state: selectedIds,
      focusedId,
      selectionMode: mode,
      callbacks,
    }),
    [callbacks, selectedIds, mode],
    'selection.context.value|callbacks,selectedIds,mode'
  );

  return <SelectionContext.Provider value={value}>{props.children}</SelectionContext.Provider>;
};
