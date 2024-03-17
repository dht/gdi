import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Reads } from './Reads';
import { useSagas } from '../../../helpers/useSaga';

export type ReadsContainerProps = {
  data: any;
};

export function ReadsContainer(props: ReadsContainerProps) {
  const dispatch = useDispatch();
  const reads = useSelector(selectors.base.$reads);

  useSagas([
    'widgets.reads', //
    'widgets.read',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'READ',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'READ',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Reads data={reads} callbacks={callbacks} />;
}

export default ReadsContainer;
