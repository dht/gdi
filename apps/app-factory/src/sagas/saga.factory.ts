import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { prompt } from '@gdi/platformer';
import { guid4 } from 'shared-base';

type ActionSplitFlex = {
    type: 'SPLIT_FLEX';
    isHorizontally: boolean;
};

function* splitFlex(action: ActionSplitFlex) {
    const layout = yield* select(selectors.base.$layout);

    if (!layout || !layout.items) {
        return;
    }

    const { items } = layout;
    console.log('123 ->', items);
}

function* deleteFlex() {
    const layout = yield* select(selectors.base.$layout);
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const { flexEntityId } = currentIds;

    if (!layout || !layout.items || !flexEntityId) {
        return;
    }

    const { items } = layout;

    yield put(
        actions.layouts.deleteItem(currentIds.layoutId, currentIds.flexEntityId)
    );
}

export function* root() {
    yield takeEvery('SPLIT_FLEX', splitFlex);
    yield takeEvery('DELETE_FLEX', deleteFlex);
}
