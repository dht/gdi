import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxInputGuidance } from './MuxInputGuidance';
import { invokeEvent } from 'shared-base';

export type MuxInputGuidanceContainerProps = {};

export function MuxInputGuidanceContainer(
  _props: MuxInputGuidanceContainerProps
) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const messages = useSelector(selectors.base.$messages);

  const callbacks = useMemo(
    () => ({
      onSelect: (item: Json) => {
        invokeEvent('MUX/PROMPT', { prompt: item.title });
      },
    }),
    []
  );

  if (messages.length > 0) {
    return null;
  }

  return <MuxInputGuidance onSelect={callbacks.onSelect} />;
}

export default MuxInputGuidanceContainer;
