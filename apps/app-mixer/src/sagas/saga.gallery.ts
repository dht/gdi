import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/platformer';
import type { ImageActionType } from '@gdi/image-gallery';

type ActionImage = {
    type: 'IMAGE_ACTION';
    actionType: ImageActionType;
    id: string;
    data: Json;
};

function* deleteImage(action: ActionImage) {
    const { didCancel } = yield* call(prompt.confirm, {
        title: 'Delete image',
        description: 'Are you sure you want to delete this image?',
        submitButtonText: "I'm sure",
    });

    if (didCancel) {
        return;
    }

    yield put(actions.libraryImages.delete(action.id));

    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const deletedIds = galleryState.deletedIds;

    yield put(
        actions.galleryState.patch({
            deletedIds: [...deletedIds, action.id],
        })
    );
}

function* selectImage(action: ActionImage) {
    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const selectedIds = galleryState.selectedIds;

    yield put(
        actions.galleryState.patch({
            selectedIds: [...selectedIds, action.id],
        })
    );
}

function* unselectImage(action: ActionImage) {
    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const selectedIds = galleryState.selectedIds;

    const newSelectedIds = selectedIds.filter((id) => id !== action.id);

    yield put(
        actions.galleryState.patch({
            selectedIds: newSelectedIds,
        })
    );
}

function* editImage(action: ActionImage) {}

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

function* addImageToFavorites(action: ActionImage) {
    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const favoriteIds = galleryState.favoriteIds;

    yield put(
        actions.galleryState.patch({
            favoriteIds: [...favoriteIds, action.id],
        })
    );
}

function* removeImageFromFavorites(action: ActionImage) {
    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const favoriteIds = galleryState.favoriteIds;

    const newSelectedIds = favoriteIds.filter((id) => id !== action.id);

    yield put(
        actions.galleryState.patch({
            favoriteIds: newSelectedIds,
        })
    );
}

function* addImageToTemporary(action: ActionImage) {
    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const temporaryIds = galleryState.temporaryIds;

    yield put(
        actions.galleryState.patch({
            temporaryIds: [...temporaryIds, action.id],
        })
    );
}

function* removeImageFromTemporaryImage(action: ActionImage) {
    const galleryState = yield* select(selectors.raw.$rawGalleryState);
    const temporaryIds = galleryState.temporaryIds;

    const newSelectedIds = temporaryIds.filter((id) => id !== action.id);

    yield put(
        actions.galleryState.patch({
            temporaryIds: newSelectedIds,
        })
    );
}

function* imageAction(action: ActionImage) {
    switch (action.actionType) {
        case 'select':
            yield selectImage(action);
            break;
        case 'unselect':
            yield unselectImage(action);
            break;
        case 'edit':
            yield editImage(action);
            break;
        case 'delete':
            yield deleteImage(action);
            break;
        case 'addTag':
            yield addTagToImage(action);
            break;
        case 'removeTag':
            yield removeTagFromImage(action);
            break;
        case 'addToFavorites':
            yield addImageToFavorites(action);
            break;
        case 'removeFromFavorites':
            yield removeImageFromFavorites(action);
            break;
        case 'addToTemporary':
            yield addImageToTemporary(action);
            break;
        case 'removeFromTemporary':
            yield removeImageFromTemporaryImage(action);
            break;
    }
}

export function* root() {
    yield takeEvery('IMAGE_ACTION', imageAction);
}
