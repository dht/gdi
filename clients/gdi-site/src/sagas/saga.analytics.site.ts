import { customEventChannel } from './channels/channel.customEvent';
import { firebase } from '../bootstrap/firebase';
import { gaEventToFirebaseLog } from 'shared-base';
import { takeEvery } from 'saga-ts';

function* ga(event: IGaEvent) {
    const { eventId } = event;
    firebase.log(eventId, gaEventToFirebaseLog(event));
}

function* setGaDefaults(analyticsProps: Json) {
    firebase.setDefaultEventParameters(analyticsProps);
}

export function* root() {
    const channelGa = customEventChannel('ga');
    yield takeEvery(channelGa, ga);

    const channelDefault = customEventChannel('GA_DEFAULTS');
    yield takeEvery(channelDefault, setGaDefaults);
}
