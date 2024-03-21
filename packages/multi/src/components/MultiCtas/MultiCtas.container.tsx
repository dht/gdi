import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Panel } from '@gdi/ui';
import { useContext, useMemo } from 'react';
import { Json } from '../../types';
import { MultiContext } from '../Multi/Multi.context';
import { MultiCtas } from './MultiCtas';
import { parseDisplay } from './MultiCtas.utils';

export type MultiCtasContainerProps = {};

export function MultiCtasContainer(_props: MultiCtasContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const { patchState, state, data, callbacks: inCallbacks } = useContext(MultiContext);
  const { itemId, config } = state;
  const { id = '', itemDisplay } = config;

  const item = useMemo(() => {
    return data.find((i) => i.id === itemId);
  }, [itemId, data]);

  const display = useMemo(() => {
    return parseDisplay(item, itemDisplay);
  }, [item]);

  const callbacks = useMemo(
    () => ({
      onIconClick: (icon: Json) => {
        if (!inCallbacks.onItemAction || !itemId) return;
        inCallbacks.onItemAction(itemId, icon.id, {});

        const idSingle = id.replace(/e?s$/, '');

        dispatch({
          type: 'CROSS_POLLINATE',
          source: idSingle,
          cta: icon.id,
          id: itemId,
          item,
        });
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
