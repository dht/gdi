import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ListsSummary } from './ListsSummary';

export type ListsSummaryContainerProps = {};

export function ListsSummaryContainer(_props: ListsSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ListsSummary />;
}

export default ListsSummaryContainer;
