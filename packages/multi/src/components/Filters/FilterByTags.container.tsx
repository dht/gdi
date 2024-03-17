import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { RadioFilter } from '@gdi/ui';
import { useMemo } from 'react';

export type FilterByTagsContainerProps = {};

export function FilterByTagsContainer(_props: FilterByTagsContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const options = useSelector(selectors.base.$filterByTags);
  const { focusTags } = appState;

  const callbacks = useMemo(
    () => ({
      onChange: (value: string) => {
        dispatch(actions.appState.patch({ focusTags: value }));
      },
    }),
    [focusTags]
  );

  return <RadioFilter options={options} value={focusTags} onChange={callbacks.onChange} />;
}

export default FilterByTagsContainer;
