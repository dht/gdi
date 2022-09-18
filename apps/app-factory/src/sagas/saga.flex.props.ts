import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { prompt } from '@gdi/platformer';

function* editFlex() {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const flexEntity = yield* select(selectors.base.$flexEntity);
    const { layoutId, flexEntityId } = currentIds;

    if (!layoutId || !flexEntityId || !flexEntity) {
        return;
    }

    yield put(
        actions.appStateFactory.patch({
            showPropertiesModal: true,
        })
    );
}

function* chooseNameFlex() {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const flexEntity = yield* select(selectors.base.$flexEntity);
    const options = yield* select(selectors.options.$layoutLocationIds);
    const { layoutId, flexEntityId } = currentIds;

    if (!layoutId || !flexEntityId || !flexEntity) {
        return;
    }

    const { value, didCancel } = yield* call(prompt.select, {
        title: 'Placeholder',
        description: 'Choose Id: ',
        placeholder: 'For instance "topLeft" or "main"',
        defaultValue: flexEntity.locationId,
        options,
        submitButtonText: 'Set (⌥⏎)',
    });

    if (didCancel) {
        return;
    }

    yield put(
        actions.layouts.patchItem(layoutId, flexEntityId, {
            locationId: value,
        })
    );
}

function* renameFlex() {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const flexEntity = yield* select(selectors.base.$flexEntity);
    const { layoutId, flexEntityId, resolutionId } = currentIds;

    if (!layoutId || !flexEntityId || !flexEntity) {
        return;
    }

    if (flexEntity.entityType === 'container') {
        return;
    }

    if (resolutionId !== '1080p') {
        yield call(chooseNameFlex);
        return;
    }

    const { value, didCancel } = yield* call(prompt.input, {
        title: 'Placeholder',
        description: 'Placeholder Id: ',
        placeholder: 'For instance "topLeft" or "main"',
        defaultValue: flexEntity.locationId,
        submitButtonText: 'Set (⏎)',
    });

    if (didCancel) {
        return;
    }

    yield put(
        actions.layouts.patchItem(layoutId, flexEntityId, {
            locationId: value,
        })
    );
}

type StyleFlexAction = {
    type: 'FLEX_PROPS_FLEX';
    flex: number;
};

function* changeStyleFlex(action: StyleFlexAction) {
    const { flex } = action;
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const flexEntity = yield* select(selectors.base.$flexEntity);
    const { layoutId, flexEntityId } = currentIds;

    if (!layoutId || !flexEntityId || !flexEntity) {
        return;
    }

    yield put(
        actions.layouts.patchItem(layoutId, flexEntityId, {
            flex,
        })
    );
}

export function* root() {
    yield takeEvery('FLEX_RENAME', renameFlex);
    yield takeEvery('FLEX_EDIT', editFlex);
    yield takeEvery('FLEX_PROPS_FLEX', changeStyleFlex);
}
