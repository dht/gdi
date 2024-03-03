import { selectors, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { invokeEvent } from 'shared-base';
import { CtxRecipe } from './CtxRecipe';

export type CtxRecipeContainerProps = {};

export function CtxRecipeContainer(_props: CtxRecipeContainerProps) {
  const capability = useSelector(selectors.mux.$capability);

  const callbacks = useMemo(
    () => ({
      onStart: () => {
        invokeEvent('MUX/START', { capability });
      },
    }),
    []
  );

  if (!capability) return null;

  return <CtxRecipe capability={capability} onStart={callbacks.onStart} />;
}

export default CtxRecipeContainer;
