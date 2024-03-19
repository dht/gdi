import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { CalendarFocus } from './CalendarFocus';

export type CalendarFocusContainerProps = {};

export function CalendarFocusContainer(_props: CalendarFocusContainerProps) {
  const dispatch = useDispatch();
  const appState = useSelector(selectors.raw.$rawAppState);

  const callbacks = useMemo(
    () => ({
      onClick: () => {},
    }),
    []
  );

  return <CalendarFocus />;
}

export default CalendarFocusContainer;
