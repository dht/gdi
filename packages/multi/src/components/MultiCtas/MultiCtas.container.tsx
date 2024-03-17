import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useContext, useMemo } from 'react';
import { MultiCtas } from './MultiCtas';
import { Panel } from '@gdi/ui';
import { MultiContext } from '../Multi/Multi.context';
import { Json } from '../../types';
import { parseDisplay } from './MultiCtas.utils';
import { MultiCtasEmpty } from './MultiCtas.components';

export type MultiCtasContainerProps = {};

export function MultiCtasContainer(_props: MultiCtasContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { patchState, state, data, callbacks: inCallbacks } = useContext(MultiContext);
  const { itemId, config } = state;
  const { itemDisplay } = config;

  const item = useMemo(() => {
    return data.find((i) => i.id === itemId);
  }, [itemId, data]);

  const display = useMemo(() => {
    return parseDisplay(item, itemDisplay);
  }, [item]);

  const callbacks = useMemo(
    () => ({
      onIconClick: (item: Json) => {
        if (!inCallbacks.onItemAction || !itemId) return;
        const { id } = item;
        inCallbacks.onItemAction(itemId, id, {});
      },
      onClose: () => {
        patchState({ showItemActions: false });
      },
    }),
    [inCallbacks, itemId]
  );

  return (
    <Panel
      id='multi-cta'
      onClose={callbacks.onClose}
      title='Item CTAs'
      width={280}
      height={260}
      className='blue'
    >
      <MultiCtas item={item} display={display} onIconClick={callbacks.onIconClick} />
    </Panel>
  );
}

export default MultiCtasContainer;
