import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ImageParams } from './ImageParams';

export type ImageParamsContainerProps = {};

export function ImageParamsContainer(_props: ImageParamsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const promptRevised = appState.promptRevised;

  const callbacks = useMemo(
    () => ({
      useSuggestion: (text: string) => {
        dispatch({ type: 'PROMPT', prompt: text });
      },
    }),
    [promptRevised]
  );

  return <ImageParams promptRevised={promptRevised} callbacks={callbacks} />;
}

export default ImageParamsContainer;
