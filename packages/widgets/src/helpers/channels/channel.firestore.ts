import { listenToFlow } from '@gdi/firebase';
import { eventChannel } from 'redux-saga';

export function firestoreChannel() {
  return eventChannel((emitter) => {
    const unListen = listenToFlow((data: Json) => {
      if (data) {
        emitter({ data });
      }
    });

    return () => {
      unListen();
    };
  });
}
