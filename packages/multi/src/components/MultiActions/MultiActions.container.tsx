import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useContext, useMemo } from 'react';
import { MultiActions } from './MultiActions';
import FilterByTierContainer from '../Filters/FilterByTier.container';
import FilterByWeekContainer from '../Filters/FilterByWeek.container';
import { MultiContext } from '../Multi/Multi.context';
import { downloadCsv } from 'shared-base';
import { fields } from './MultiActions.data';

export type MultiActionsContainerProps = {};

export function MultiActionsContainer(_props: MultiActionsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { state, data, callbacks: cbs, patchState } = useContext(MultiContext);
  const { q } = state;

  const callbacks = useMemo(
    () => ({
      onExport: () => {
        downloadCsv('export.csv', fields, data);
      },
      onToggleItemActions: () => {
        patchState((s) => {
          const { showItemActions } = s;
          return { showItemActions: !showItemActions };
        });
      },
      onSearch: (ev: any) => {
        if (!cbs.onSearch) return;
        const value = ev.target.value;
        ev.stopPropagation();
        cbs.onSearch(value);
      },
    }),
    []
  );

  return <MultiActions q={q} callbacks={callbacks} />;
}

export default MultiActionsContainer;
