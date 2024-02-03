import { useDispatch, useSelector } from '@gdi/store-base';
import { selectors } from '@gdi/store-iso';
import React, { useMemo } from 'react';
import { BitTimeline } from './BitTimeline';

export type BitTimelineContainerProps = {};

export function BitTimelineContainer(_props: BitTimelineContainerProps) {
  const dispatch = useDispatch();
  const bits = useSelector(selectors.base.$bits);
  const currentIds = useSelector(selectors.raw.$rawSceneCurrentIds);

  const callbacks = useMemo(
    () => ({
      onBit: (verb: string, id: string, data?: Json) => {
        dispatch({
          type: 'BIT',
          verb,
          id,
          payload: data,
        });
      },
      onToolbox: (commandId: string) => {
        dispatch({
          type: 'TOOLBOX',
          verb: commandId,
        });
      },
    }),
    []
  );

  return <BitTimeline bits={bits as any} bitId={currentIds.bitId} callbacks={callbacks} />;
}

export default BitTimelineContainer;
