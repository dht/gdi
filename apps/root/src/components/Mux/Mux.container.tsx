import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useBlackBk, useNoScroll } from '@gdi/ui';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { Mux } from './Mux';

export type MuxContainerProps = {};

export function MuxContainer(_props: MuxContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const messages = useSelector(selectors.base.$messages);

  useBlackBk();
  useNoScroll();

  const callbacks = useMemo(
    () => ({
      onSubmit: (prompt: string) => {
        invokeEvent('MUX/PROMPT', { prompt });
      },
    }),
    []
  );

  return <Mux messages={messages} callbacks={callbacks} />;
}

export default MuxContainer;
