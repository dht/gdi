import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { RemindersSummary } from './RemindersSummary';

export type RemindersSummaryContainerProps = {};

export function RemindersSummaryContainer(_props: RemindersSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <RemindersSummary />;
}

export default RemindersSummaryContainer;
