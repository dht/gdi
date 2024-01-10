import { eventChannel } from 'redux-saga';
import { onAuthStateChanged } from '@gdi/firebase';

export function authChangeChannel() {
  return eventChannel((emitter) => {
    function callback(user: any) {
      emitter({ user });
    }

    const unlisten = onAuthStateChanged(callback);

    return () => {
      unlisten();
    };
  });
}
