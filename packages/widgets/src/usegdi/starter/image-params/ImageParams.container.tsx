import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { formDefaults } from '../../../_definitions/forms';
import { usePromptParams } from '../../../hooks/usePromptParams';
import { ImageParams } from './ImageParams';

export type ImageParamsContainerProps = {};

export function ImageParamsContainer(_props: ImageParamsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const allOptions = useSelector(selectors.options.$allOptions);
  const [imageParams, { onParamsChange }] = usePromptParams('IMAGE_PARAMS', formDefaults.imageParams); // prettier-ignore
  const promptRevised = appState.promptRevised;

  const callbacks = useMemo(
    () => ({
      useSuggestion: (text: string) => {
        dispatch({ type: 'PROMPT', prompt: text });
      },
      onParametersChange: (allValues: Json) => {
        onParamsChange(allValues);
      },
    }),
    [promptRevised]
  );

  return (
    <ImageParams
      promptRevised={promptRevised}
      imageParams={imageParams}
      allOptions={allOptions}
      callbacks={callbacks}
    />
  );
}

export default ImageParamsContainer;
