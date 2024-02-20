import { eventChannel } from 'redux-saga';
import { addListener } from 'shared-base';

export function customEvenChannel(eventId: string) {
  return eventChannel((emitter) => {
    const unListen = addListener(eventId, (data: Json) => {
      emitter({ data });
    });

    return () => {
      unListen();
    };
  });
}
