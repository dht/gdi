import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { EventsSummary } from './EventsSummary';

export type EventsSummaryContainerProps = {};

export function EventsSummaryContainer(_props: EventsSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <EventsSummary />;
}

export default EventsSummaryContainer;
