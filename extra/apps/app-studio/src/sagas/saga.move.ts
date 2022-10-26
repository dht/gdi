import { isoEventChannel } from './channels/channel.isoEvent';
import { put, takeEvery } from 'saga-ts';
import { actions } from '../store';

type MoveDoneData = {
    id: string;
    position: IPosition;
};

function* moveDone(data: MoveDoneData) {
    const { id, position } = data;
    yield put(actions.items.patch(id, { position }));
}

export function* root() {
    const channelMoveDone = isoEventChannel('BABYLON_ISO_MOVE_END');
    yield takeEvery(channelMoveDone, moveDone);
}
