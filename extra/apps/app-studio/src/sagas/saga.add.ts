import { isoEventChannel } from './channels/channel.isoEvent';
import { put, select, takeEvery } from 'saga-ts';
import type { PickingInfo } from 'babylonjs';
import { actions, selectors } from '../store';
import { globals } from '../utils/globals';

type AddData = {
    building: IBuilding;
};

function* addBuilding(data: AddData) {
    const { building } = data;
    const { identifier, assetId, width, height } = building;
    const studioState = yield* select(selectors.raw.$rawStudioState);
    const boardId = studioState.currentBoardId;

    const promise = yield* put(
        actions.items.add({
            type: 'iso',
            identifier,
            assetId,
            width,
            height,
            position: { x: 0, y: 0.6, z: 0 },
            boardId,
        })
    );

    const response = yield promise;
    globals.babylon.buildItem(response.data);
}

export function* root() {
    yield takeEvery('NEW_BUILDING', addBuilding);
}
