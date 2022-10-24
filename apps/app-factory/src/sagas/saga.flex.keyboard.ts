import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { IShortKey, prompt } from '@gdi/platformer';
import { guid4 } from 'shared-base';
import {
    firstChild,
    getItemInfo,
    IItemInfo,
    nextOrder,
    nextSibling,
    previousSibling,
} from '../utils/flex';

type ActionArrowFlex = {
    type: 'FLEX_DESIGNER_ARROW';
    shortKey: IShortKey;
};

function* navigateUp(info: IItemInfo) {
    const { parentFlexDirection, siblings, siblingsSelfIndex } = info;

    if (parentFlexDirection === 'row') {
        return;
    }

    const item = previousSibling(info);

    if (!item) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: item.id,
        })
    );
}

function* navigateDown(info: IItemInfo) {
    const { parentFlexDirection } = info;

    if (parentFlexDirection === 'row') {
        return;
    }

    const item = nextSibling(info);

    if (!item) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: item.id,
        })
    );
}

function* navigateRight(info: IItemInfo) {
    const { parentFlexDirection } = info;

    if (parentFlexDirection === 'column') {
        return;
    }

    const item = nextSibling(info);

    if (!item) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: item.id,
        })
    );
}

function* navigateLeft(info: IItemInfo) {
    const { parentFlexDirection } = info;

    if (parentFlexDirection === 'column') {
        return;
    }

    const item = previousSibling(info);

    if (!item) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: item.id,
        })
    );
}

function* navigateOut(info: IItemInfo) {
    const { parentId } = info;

    if (!parentId) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: parentId,
        })
    );
}

function* navigateIn(info: IItemInfo) {
    const { item, firstChild } = info;

    if (!item ?? !firstChild) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: firstChild.id,
        })
    );
}

function* navigateFlex(action: ActionArrowFlex) {
    const { shortKey } = action;

    const layout = yield* select(selectors.base.$layout);
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);

    if (!layout || !layout.items) {
        return;
    }

    const { layoutId, flexEntityId } = currentIds;

    if (!layoutId || !flexEntityId) {
        return;
    }

    const flexEntityInfo = getItemInfo(layout.items, flexEntityId);
    let method;

    switch (shortKey.key) {
        case 'ArrowUp':
            method = shortKey.withAlt ? navigateOut : navigateUp;
            yield call(method, flexEntityInfo);
            break;
        case 'ArrowRight':
            yield call(navigateRight, flexEntityInfo);
            break;
        case 'ArrowDown':
            method = shortKey.withAlt ? navigateIn : navigateDown;
            yield call(method, flexEntityInfo);
            break;
        case 'ArrowLeft':
            yield call(navigateLeft, flexEntityInfo);
            break;
    }
}

type ActionResolutionFlex = {
    type: 'FLEX_RESOLUTION';
    resolutionIndex: number;
};

function* navigateResolution(action: ActionResolutionFlex) {
    const { resolutionIndex } = action;
    const resolutions = yield* select(selectors.base.$resolutions);

    const resolution = resolutions[resolutionIndex];

    if (!resolution) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            resolutionId: resolution.id,
        })
    );

    yield delay(100);

    yield call(focusOnRoot);
}

function* focusOnRoot() {
    const layoutRoot = yield* select(selectors.base.$layoutRoot);

    if (!layoutRoot) {
        return;
    }

    yield put(
        actions.currentIdsFactory.patch({
            flexEntityId: layoutRoot.id,
        })
    );
}

export function* root() {
    yield takeEvery('FLEX_DESIGNER_ARROW', navigateFlex);
    yield takeEvery('FLEX_RESOLUTION', navigateResolution);
}
