import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { RadioFilter } from '@gdi/ui';
import { useMemo } from 'react';

export type FilterByProjectContainerProps = {};

export function FilterByProjectContainer(_props: FilterByProjectContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const options = useSelector(selectors.base.$filterByProject);
  const { focusProject } = appState;

  const callbacks = useMemo(
    () => ({
      onChange: (value: string) => {
        dispatch(actions.appState.patch({ focusProject: value }));
      },
    }),
    [focusProject]
  );

  return <RadioFilter options={options} value={focusProject} onChange={callbacks.onChange} />;
}

export default FilterByProjectContainer;
