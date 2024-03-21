import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import { useMemo } from 'react';
import { useSagas } from '../../../helpers/useSaga';
import { Events } from './Events';

export type EventsContainerProps = {
  data: any;
};

export function EventsContainer(props: EventsContainerProps) {
  const dispatch = useDispatch();
  const events = useSelector(selectors.md.$externalEvents);

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
