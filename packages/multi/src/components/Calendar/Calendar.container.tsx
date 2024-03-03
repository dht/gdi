import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { Calendar } from './Calendar';
import { CalendarBuilder } from './Calendar.utils';

export type CalendarContainerProps = {};

export function CalendarContainer(_props: CalendarContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const firstDayOfWeek = appState.firstDayOfWeek;

  const calendar = useMemo(() => {
    const calendarBuilder = new CalendarBuilder(firstDayOfWeek);
    return calendarBuilder.build();
  }, []);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <Calendar definition={calendar} firstDayOfWeek={firstDayOfWeek} />;
}

export default CalendarContainer;
