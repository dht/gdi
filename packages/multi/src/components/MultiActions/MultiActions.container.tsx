import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useContext, useMemo } from 'react';
import { downloadCsv } from 'shared-base';
import { MultiContext } from '../Multi/Multi.context';
import { MultiActions } from './MultiActions';
import { fields } from './MultiActions.data';

export type MultiActionsContainerProps = {};

export function MultiActionsContainer(_props: MultiActionsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { state, data, callbacks: cbs, patchState } = useContext(MultiContext);
  const { q, views, itemId } = state;

  const showFocus = views.includes('focus') && itemId;

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
      onFocus: () => {
        patchState({ activeView: 'focus' });
      },
    }),
    []
  );

  return <MultiActions q={q} callbacks={callbacks} showFocus={showFocus} />;
}

export default MultiActionsContainer;
