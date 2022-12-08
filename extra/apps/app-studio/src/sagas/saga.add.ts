import { put, select, takeEvery } from 'saga-ts';
import { actions, selectors } from '../store';
import { globals } from '../utils/globals';
import type { IBuilding } from 'isokit';

type AddData = {
    type: 'NEW_BUILDING,';
    building: IBuilding;
};

function* addBuilding(data: AddData) {
    const { building } = data;
    const { identifier, assetId, width, height } = building;
    const studioState = yield* select(selectors.raw.$rawStudioState);
    const boardId = studioState.currentBoardId;

    const promise: any = yield* put(
        actions.studioItems.add({
            type: 'iso',
            identifier,
            assetId,
            width,
            height,
            position: { x: 0, y: 0.6, z: 0 },
            boardId,
        })
    );

    // @ts-expect-error
    const response = yield promise;
    globals.babylon.buildItem(response.data);
}

export function* root() {
    yield takeEvery('NEW_BUILDING', addBuilding);
}
