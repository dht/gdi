import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { RadioFilter } from '@gdi/ui';
import { useMemo } from 'react';
import { calcNextValue } from './FilterByTier.utils';

export type FilterByTierContainerProps = {};

export function FilterByTierContainer(_props: FilterByTierContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const options = useSelector(selectors.base.$filterByTier);
  const { focusTiers } = appState;

  const callbacks = useMemo(
    () => ({
      onChange: (value: string) => {
        const newValue = calcNextValue(focusTiers, value);
        dispatch(actions.appState.patch({ focusTiers: newValue }));
      },
    }),
    [focusTiers]
  );

  return <RadioFilter options={options} value={focusTiers} onChange={callbacks.onChange} />;
}

export default FilterByTierContainer;
