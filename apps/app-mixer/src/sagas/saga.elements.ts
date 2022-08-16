import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/platformer';

type ActionAddElement = {
    type: 'ADD_ELEMENT';
};

function* addElement(_action: ActionAddElement) {
    const pageId = yield* select(selectors.base.$currentPage);
    const order = yield* select(selectors.base.$nextElementOrder);

    const { didCancel, value } = yield prompt.select({
        title: 'New instance',
        label: 'Select a type',
        options: [
            {
                key: 'hero',
                text: 'hero',
            },
            {
                key: 'threePoints',
                text: 'threePoints',
            },
            {
                key: 'userBar',
                text: 'userBar',
            },
            {
                key: 'textAndImage',
                text: 'textAndImage',
            },
            {
                key: 'lineCta',
                text: 'lineCta',
            },
            {
                key: 'footer',
                text: 'footer',
            },
        ],
        placeholder: 'Element type',
        submitButtonText: 'Create',
    });

    if (didCancel) {
        return;
    }

    const id = `${value}_${order}`;
    const placeholderType = value;

    yield put(
        actions.instances.set(id, {
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

    yield put(actions.instances.delete(action.id));
}

export function* root() {
    yield takeEvery('ELEMENT_ADD', addElement);
    yield takeEvery('ELEMENT_DELETE', deleteElement);
}
