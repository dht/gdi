import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { ElementList } from '@gdi/ui';
import { useMemo } from 'react';
import { list } from './ElementsManager.data';

export type ElementsManagerContainerProps = {};

export function ElementsManagerContainer(props: ElementsManagerContainerProps) {
  const dispatch = useDispatch();
  const items = useSelector(selectors.base.$elementListForBit);

  const callbacks = useMemo(
    () => ({
      onAction: (actionId: string, elementId: string) => {
        const item = items.find((item: any) => item.id === elementId);

        dispatch({
          type: 'SCENE_ELEMENT',
          verb: actionId,
          id: elementId,
          payload: item,
        });
      },
    }),
    [items]
  );

  return (
    <ElementList
      items={items}
      columns={list.columns as any}
      actions={list.actions}
      onAction={callbacks.onAction}
      emptyMessage='Select a bit to see its elements'
    />
  );
}

export default ElementsManagerContainer;
