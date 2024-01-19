import { actions, useDispatch } from '@gdi/store-base';
import { useCallback, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { useMount } from '@gdi/ui';

export function usePromptParams(id: string, values: Json) {
  const dispatch = useDispatch();
  const [imageParams, setImageParams] = useLocalStorage(id, values);

  useMount(() => {
    dispatch(actions.appState.patch({ promptParams: imageParams }));
  }, 300);

  const onParamsChange = (allValues: Json) => {
    setImageParams(allValues);
    dispatch(actions.appState.patch({ promptParams: allValues }));
  };

  return [imageParams, { onParamsChange }] as const;
}
