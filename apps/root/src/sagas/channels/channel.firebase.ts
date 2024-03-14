import { listenToMessageStream } from '@gdi/firebase';
import { eventChannel } from 'redux-saga';

export function firestoreFlowChannel() {
  return eventChannel((emitter) => {
    const unListen = listenToMessageStream((data: any) => {
      console.log('data ->', data);

      if (data) {
        emitter({ data });
      }
    });

    return () => {
      unListen();
    };
  });
}
