import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ListItemsSummary } from './ListItemsSummary';

export type ListItemsSummaryContainerProps = {};

export function ListItemsSummaryContainer(_props: ListItemsSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ListItemsSummary />;
}

export default ListItemsSummaryContainer;
