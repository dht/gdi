import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/platformer';
import { guid4 } from 'shared-base';

type ActionAddElement = {
    type: 'ADD_ELEMENT';
};

function* addElement(_action: ActionAddElement) {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const pageId = currentIds.pageId;
    const order = yield* select(selectors.base.$nextElementOrder);
    const options = yield* select(selectors.options.$elementTypes);

    const { didCancel, value } = yield prompt.select({
        title: 'New instance',
        label: 'Select a type',
        options,
        placeholder: 'Element type',
        submitButtonText: 'Create',
    });

    if (didCancel) {
        return;
    }

    const id = `${pageId}-${value}-${guid4()}`;

    const placeholderType = value;

    yield put(
        actions.instancesBlocks.add({
            id,
            pageId,
            isPlaceholder: true,
            placeholderType,
            order,
        })
    );
}

type ActionDeleteElement = {
    type: 'DELETE_ELEMENT';
    id: string;
};

function* deleteElement(action: ActionDeleteElement) {
    const { didCancel } = yield* call(prompt.confirm, {
        title: 'Delete instance',
        description: 'Are you sure you want to delete this instance?',
        submitButtonText: "I'm sure",
    });

    if (didCancel) {
        return;
    }

    yield put(actions.instancesBlocks.delete(action.id));
}

export function* root() {
    yield takeEvery('ELEMENT_ADD', addElement);
    yield takeEvery('ELEMENT_DELETE', deleteElement);
}
