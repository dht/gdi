import { call, fork } from 'saga-ts';
import { invokeEvent, setJson } from 'shared-base';
import { getDemoConfig } from '@gdi/platformer';

export function* demo() {
    const demoConfig = getDemoConfig();
    const { url } = demoConfig;

    invokeEvent('demoAuthChange', {
        uid: 'demo',
        displayName: 'Demo User',
        email: 'demo@example.com',
        emailVerified: true,
        phoneNumber: '',
        photoURL: '',
    });

    // invokeEvent('SHOW_PLAYGROUND_MODAL');

    // set LocalStorage data from demoDataUrl
    const { localStorage } = yield fetch(url).then((res) => res.json());

    for (const key in localStorage) {
        setJson(key, localStorage[key]);
    }
}

export function* root() {
    yield* fork(demo);
}
