import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MultiActions } from './MultiActions';
import FilterByTierContainer from './_parts/FilterByTier.container';
import FilterByWeekContainer from './_parts/FilterByWeek.container';

export type MultiActionsContainerProps = {};

export function MultiActionsContainer(_props: MultiActionsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onExport: () => {},
    }),
    []
  );

  return <MultiActions />;
}

export default MultiActionsContainer;
