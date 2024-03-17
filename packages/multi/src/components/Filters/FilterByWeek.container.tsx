import { actions, selectors, useDispatch, useSelector } from '@gdi/store-base';
import { RadioFilter } from '@gdi/ui';
import { useMemo } from 'react';

export type FilterByWeekProps = {};

export function FilterByWeekContainer(_props: FilterByWeekProps) {
  const dispatch = useDispatch();
  const options = useSelector(selectors.base.$filterByWeek);
  const currentIds = useSelector(selectors.raw.$rawCurrentIds);
  const { weekId } = currentIds;

  const callbacks = useMemo(
    () => ({
      onChange: (value: number) => {
        dispatch(actions.currentIds.patch({ weekId: value }));
      },
    }),
    []
  );

  return <RadioFilter options={options} value={weekId} onChange={callbacks.onChange} />;
}

export default FilterByWeekContainer;
