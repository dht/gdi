import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxInputGuidance } from './MuxInputGuidance';
import { invokeEvent } from 'shared-base';
import { useFuzzySearchQ } from '@gdi/ui';
import { data } from './MuxInputGuidance.data';

export type MuxInputGuidanceContainerProps = {
  prompt: string;
};

export function MuxInputGuidanceContainer(
  props: MuxInputGuidanceContainerProps
) {
  const { prompt } = props;
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const messages = useSelector(selectors.base.$messages);

  const items = useFuzzySearchQ(data, ['title', 'description'], prompt);

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

  return <MuxInputGuidance items={items} onSelect={callbacks.onSelect} />;
}

export default MuxInputGuidanceContainer;
