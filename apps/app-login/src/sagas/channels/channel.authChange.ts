import { firebase } from '@gdi/platformer';
import { eventChannel } from 'redux-saga';

export function authChangeChannel() {
    return eventChannel((emitter) => {
        function onAuthStateChanged(user: any) {
            emitter({ user });
        }

        firebase.addAuthListener(onAuthStateChanged);

        return () => {
            firebase.removeAuthListener(onAuthStateChanged);
        };
    });
}
