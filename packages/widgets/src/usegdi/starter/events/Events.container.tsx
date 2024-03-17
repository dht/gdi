import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Events } from './Events';
import { useSagas } from '../../../helpers/useSaga';

export type EventsContainerProps = {
  data: any;
};

export function EventsContainer(props: EventsContainerProps) {
  const dispatch = useDispatch();
  const events = useSelector(selectors.base.$externalEvents);

  useSagas([
    'widgets.externalEvents', //
    'widgets.externalEvent',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'EXTERNAL_EVENT',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'EXTERNAL_EVENT',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Events data={events} callbacks={callbacks} />;
}

export default EventsContainer;
