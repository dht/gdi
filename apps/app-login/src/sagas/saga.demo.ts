import { fork } from 'saga-ts';
import { invokeEvent } from 'shared-base';

export function* demo() {
    invokeEvent('demoAuthChange', {
        uid: 'demo',
        displayName: 'Demo User',
        email: 'demo@example.com',
        emailVerified: true,
        phoneNumber: '',
        photoURL: '',
    });
}

export function* root() {
    yield* fork(demo);
}
