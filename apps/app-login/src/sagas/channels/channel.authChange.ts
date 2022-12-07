import { firebase } from '@gdi/platformer';
import { eventChannel } from 'redux-saga';
import { addListener } from 'shared-base';

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

export function authChangeChannelDemo() {
    return eventChannel((emitter) => {
        function onAuthStateChanged(user: any) {
            emitter({ user });
        }

        const clear = addListener('demoAuthChange', onAuthStateChanged);

        return () => {
            clear();
        };
    });
}
