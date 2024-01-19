import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { ImageSuggestion } from './ImageSuggestion';

export type ImageSuggestionContainerProps = {};

export function ImageSuggestionContainer(_props: ImageSuggestionContainerProps) {
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

  return <ImageSuggestion promptRevised={promptRevised} callbacks={callbacks} />;
}

export default ImageSuggestionContainer;
