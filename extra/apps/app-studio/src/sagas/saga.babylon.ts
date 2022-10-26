import { globals } from '../utils/globals';
import { BabylonApi } from 'isokit';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { RefObject } from 'react';
import { selectors } from '../selectors';
import { Action } from '../types';
import { actions } from '../store';

globals.babylon = new BabylonApi();

type TriggerAction = {
    type: 'INIT_BABYLON';
    ref: RefObject<HTMLCanvasElement>;
};

function* loadBoard() {
    const babylon = globals.babylon;

    if (!babylon.isReady) {
        return;
    }

    babylon.clearItems();

    const assets = yield* select(selectors.raw.$rawAssets);
    babylon.assets = assets;

    const cameras = yield* select(selectors.base.$cameras);
    Object.values(cameras).forEach((camera) => babylon.buildCamera(camera));

    const grounds = yield* select(selectors.base.$grounds);
    Object.values(grounds).forEach((ground) => babylon.buildItem(ground));

    const lights = yield* select(selectors.base.$lights);
    Object.values(lights).forEach((light) => babylon.buildLight(light));

    const particles = yield* select(selectors.raw.$rawParticles);
    Object.values(particles).forEach((particle) => babylon.buildParticleSystem(particle)); // prettier-ignore

    const items = yield* select(selectors.base.$currentItems);
    Object.values(items).forEach((item) => globals.babylon.buildItem(item));
}

function* initBabylon(action: TriggerAction) {
    globals.babylon.ref = action.ref;
    yield* fork(loadBoard);
}

export function* loadWorkBoard() {
    const boards = yield* select(selectors.raw.$rawBoards);

    const workBoard = Object.values(boards).find(
        (board) => board.identifier === 'work'
    );

    if (!workBoard) {
        return;
    }

    yield put(
        actions.appStateStudio.patch({
            currentBoardId: workBoard.id,
        })
    );
}

export function* root() {
    yield takeEvery('INIT_BABYLON', initBabylon);
    yield takeEvery(
        (action: Action) =>
            action.type === 'PATCH_APPSTATESTUDIO' &&
            action.payload?.currentBoardId,
        loadBoard
    );
    yield takeEvery('RELOAD_BOARD', loadBoard);
}
