import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import { ElementList } from '@gdi/ui';
import { useMemo } from 'react';
import { list } from './BitManager.data';

export type BitManagerContainerProps = {};

export function BitManagerContainer(_props: BitManagerContainerProps) {
  const dispatch = useDispatch();
  const items = useSelector(selectors.base.$bits);

  const callbacks = useMemo(
    () => ({
      onAction: (actionId: string, bitId: string) => {
        dispatch({
          type: 'BIT',
          verb: actionId,
          id: bitId,
        });
      },
    }),
    []
  );

  return (
    <ElementList
      items={items}
      columns={list.columns}
      actions={list.actions}
      onAction={callbacks.onAction}
    />
  );
}

export default BitManagerContainer;
