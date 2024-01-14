import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { Filter } from '@gdi/ui';

export type FilterContainerProps = {};

export function FilterContainer(_props: FilterContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const onFilter = (filter: string) => {
    dispatch(actions.appState.patch({ filter }));
  };

  return <Filter value={appState.filter} onChange={onFilter} />;
}

export default FilterContainer;
