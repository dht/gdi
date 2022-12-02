import { takeEvery } from 'saga-ts';
import { gaEventToFirebaseLog } from 'shared-base';
import { firebase } from '../utils/firebase';
import { customEventChannel } from './channels/channel.customEvent';

function* gaAdmin(event: IGaEvent) {
    const { eventId } = event;
    firebase.log(eventId, gaEventToFirebaseLog(event));
}

// can be used to validate events
function* gaSite(event: IGaEvent) {
    // console.log('site ga => ', JSON.stringify(event, null, 4));
    // firebase.log(event.eventId, gaEventToFirebaseLog(event));
}

export function* root() {
    const channelSite = customEventChannel('ga');
    yield takeEvery(channelSite, gaSite);

    const channelAdmin = customEventChannel('gaAdmin');
    yield takeEvery(channelAdmin, gaAdmin);
}
