import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { FinancesSummary } from './FinancesSummary';

export type FinancesSummaryContainerProps = {};

export function FinancesSummaryContainer(_props: FinancesSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <FinancesSummary />;
}

export default FinancesSummaryContainer;
