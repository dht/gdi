import { eventChannel } from 'redux-saga';
import { addListener } from 'shared-base';
import { throttle } from 'lodash';

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

export function customEvenChannelThrottled(eventId: string, millis: number) {
  return eventChannel((emitter) => {
    const throttledEmitter = throttle((data: Json) => {
      emitter({ data });
    }, millis);

    const unListen = addListener(eventId, (data: Json) => throttledEmitter(data));

    return () => {
      unListen();
    };
  });
}
