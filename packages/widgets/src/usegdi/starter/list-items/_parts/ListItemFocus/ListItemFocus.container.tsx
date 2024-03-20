import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ListItemFocus } from './ListItemFocus';

export type ListItemFocusContainerProps = {};

export function ListItemFocusContainer(_props: ListItemFocusContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ListItemFocus />;
}

export default ListItemFocusContainer;
