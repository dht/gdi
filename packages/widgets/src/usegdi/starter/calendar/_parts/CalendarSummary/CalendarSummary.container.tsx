import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { CalendarSummary } from './CalendarSummary';
import { CalendarSummaryBuilder } from './CalendarSummary.utils';

export type CalendarSummaryContainerProps = {};

export function CalendarSummaryContainer(_props: CalendarSummaryContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);
  const firstDayOfWeek = appState.firstDayOfWeek;

  const calendar = useMemo(() => {
    const calendarBuilder = new CalendarSummaryBuilder(firstDayOfWeek);
    return calendarBuilder.build();
  }, []);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <CalendarSummary definition={calendar} firstDayOfWeek={firstDayOfWeek} />;
}

export default CalendarSummaryContainer;
