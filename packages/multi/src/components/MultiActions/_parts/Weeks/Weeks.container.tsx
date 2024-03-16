import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Weeks } from './Weeks';
import { actions } from '@gdi/store-base';

export type WeeksContainerProps = {};

export function WeeksContainer(_props: WeeksContainerProps) {
  const dispatch = useDispatch();
  const weeks = useSelector(selectors.base.$weeks);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { weekId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onChange: (value: number) => {
        dispatch(actions.currentIds.patch({ weekId: value }));
      },
    }),
    []
  );

  return <Weeks data={weeks} value={weekId} onChange={callbacks.onChange} />;
}

export default WeeksContainer;
