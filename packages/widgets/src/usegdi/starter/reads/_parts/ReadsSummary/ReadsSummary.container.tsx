import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ReadsSummary } from './ReadsSummary';

export type ReadsSummaryContainerProps = {};

export function ReadsSummaryContainer(_props: ReadsSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <ReadsSummary />;
}

export default ReadsSummaryContainer;
