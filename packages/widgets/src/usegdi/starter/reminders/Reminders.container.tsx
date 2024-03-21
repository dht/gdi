import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Reminders } from './Reminders';
import { useSagas } from '../../../helpers/useSaga';

export type RemindersContainerProps = {
  data: any;
};

export function RemindersContainer(props: RemindersContainerProps) {
  const dispatch = useDispatch();
  const reminders = useSelector(selectors.md.$reminders);

  useSagas([
    'widgets.reminders', //
    'widgets.reminder',
  ]);

  const callbacks = useMemo(
    () => ({
      onAction: (verb: string, params?: Json) => {
        dispatch({
          type: 'REMINDER',
          verb,
          payload: params,
        });
      },
      onItemAction: (id: string, verb: string, payload?: Json) => {
        dispatch({
          type: 'REMINDER',
          verb,
          id,
          payload,
        });
      },
    }),
    []
  );

  return <Reminders data={reminders} callbacks={callbacks} />;
}

export default RemindersContainer;
