import { actions } from '../store';
import { delay, fork, put, takeEvery } from 'saga-ts';
import { gaEventToFirebaseLog } from 'shared-base';
import { customEventChannel } from './channels/channel.customEvent';
import { firebase } from '../bootstrap/firebase';

function* ga(event: IGaEvent) {
    const { eventId } = event;
    firebase.log(eventId, gaEventToFirebaseLog(event));
}

export function* root() {
    const channel = customEventChannel('ga');
    yield takeEvery(channel, ga);
}
