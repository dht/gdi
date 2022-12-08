import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/web-ui';

type ImageActionType = 'addTag' | 'removeTag';

type ActionImage = {
    type: 'IMAGE_ACTION';
    actionType: ImageActionType;
    id: string;
    data: Json;
};

function* addTagToImage(action: ActionImage) {
    const images = yield* select(selectors.base.$libraryImages);
    const image = images.find((item) => item.id === action.id);

    if (!image) {
        return;
    }

    const newTags = [...image.tags, action.data.tag];

    yield* put(
        actions.libraryImages.patch(action.id, {
            tags: newTags,
        })
    );
}

function* removeTagFromImage(action: ActionImage) {
    const images = yield* select(selectors.base.$libraryImages);
    const image = images.find((item) => item.id === action.id);

    if (!image) {
        return;
    }

    const newTags = image.tags.filter((tag) => tag !== action.data.tag);

    yield* put(
        actions.libraryImages.patch(action.id, {
            tags: newTags,
        })
    );
}

function* imageAction(action: ActionImage) {
    switch (action.actionType) {
        case 'addTag':
            yield addTagToImage(action);
            break;
        case 'removeTag':
            yield removeTagFromImage(action);
            break;
    }
}

export function* root() {
    yield takeEvery('IMAGE_ACTION', imageAction);
}
