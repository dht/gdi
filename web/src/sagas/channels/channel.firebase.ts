import { listenToFlow } from '@gdi/firebase';
import { eventChannel } from 'redux-saga';
import { Json } from '../../types';

export function firestoreFlowChannel() {
  return eventChannel((emitter) => {
    const unListen = listenToFlow((data: any) => {
      if (data) {
        emitter({ data });
      }
    });

    return () => {
      unListen();
    };
  });
}
