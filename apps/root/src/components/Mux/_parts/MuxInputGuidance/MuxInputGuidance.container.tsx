import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { MuxInputGuidance } from './MuxInputGuidance';

export type MuxInputGuidanceContainerProps = {};

export function MuxInputGuidanceContainer(
  _props: MuxInputGuidanceContainerProps
) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const messages = useSelector(selectors.base.$messages);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  if (messages.length > 0) {
    return null;
  }

  return <MuxInputGuidance />;
}

export default MuxInputGuidanceContainer;
