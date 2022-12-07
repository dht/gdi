import { isoEventChannel } from './channels/channel.isoEvent';
import { put, takeEvery } from 'saga-ts';
import { globals } from '../utils/globals';
import { actions } from '../store';

function* keyDown(data: Json) {
    const { key } = data;

    switch (key) {
        case 'Escape':
            globals.babylon.backToHome();
            yield put(
                actions.appStateStudio.patch({
                    flavour: 'main',
                })
            );
            break;
        case 'Delete':
            if (data.hoveredId) {
                yield put(actions.studioItems.delete(data.hoveredId));
                globals.babylon.clearHovered();
            }
            break;
    }
}

function* keyUp(key: string) {}

export function* root() {
    const keyDownChannel = isoEventChannel('BABYLON_KEY_DOWN');
    yield takeEvery(keyDownChannel, keyDown);
    const keyUpChannel = isoEventChannel('BABYLON_KEY_UP');
    yield takeEvery(keyUpChannel, keyUp);
}
