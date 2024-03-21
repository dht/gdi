import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { RadioFilter } from '@gdi/ui';
import { useMemo } from 'react';

export type FilterByTodayProps = {};

export function FilterByTodayContainer(_props: FilterByTodayProps) {
  const dispatch = useDispatch();
  const options = useSelector(selectors.base.$filterByToday);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { todayId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onChange: (value: number) => {
        dispatch(actions.currentIds.patch({ todayId: value }));
      },
    }),
    []
  );

  return <RadioFilter options={options} value={todayId} onChange={callbacks.onChange} />;
}

export default FilterByTodayContainer;
