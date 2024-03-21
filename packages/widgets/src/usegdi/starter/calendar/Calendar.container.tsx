import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Calendar } from './Calendar';
import { useSagas } from '../../../helpers/useSaga';

export type CalendarContainerProps = {
  data: any;
};

export function CalendarContainer(props: CalendarContainerProps) {
  const dispatch = useDispatch();
  const events = useSelector(selectors.md.$events);

  useSagas([
    'widgets.calendarEvents', //
    'widgets.calendarEvent',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'CALENDAR_EVENT',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'CALENDAR_EVENT',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Calendar data={events} callbacks={callbacks} />;
}

export default CalendarContainer;
