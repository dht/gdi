import { actions, selectors } from '../store';
import { delay, put, select, takeEvery } from 'saga-ts';
import { get } from 'lodash';
import { onInstanceSelectionChange } from './predicates';

type ActionSwitchImage = {
    type: 'SWITCH_IMAGE_ACTION';
    imageId: string;
    unselect?: boolean;
};

function* switchImage(action: ActionSwitchImage) {
    const { imageId, unselect } = action;
    const images = yield* select(selectors.raw.$rawLibraryImages);
    const params = yield* select(selectors.base.$selectedElementImageId);
    const { instanceId, fieldId } = params;

    const image = images[imageId];

    if (!image) {
        return;
    }

    const fieldIdWithDashes = fieldId.replace(/\./g, '_');

    yield put(
        actions.instancesProps.patch(instanceId, {
            [fieldIdWithDashes]: unselect ? '' : image.imageUrl,
        })
    );
}

function* chooseFirstImageField(action: any) {
    yield delay(10);

    const fieldInfo = yield* select(
        selectors.base.$imageFieldsForCurrentElement
    );

    if (!fieldInfo) {
        return;
    }

    const fieldId = Object.keys(fieldInfo)[0];

    yield put(actions.currentIds.patch({ fieldId }));

    yield delay(10);

    const params = yield* select(selectors.base.$selectedElementImageId);

    if (params.imageId) {
        yield put(
            actions.galleryState.patch({
                selectedIds: [params.imageId],
            })
        );
    }
}

export function* root() {
    yield takeEvery('SWITCH_IMAGE_ACTION', switchImage);
    yield takeEvery(onInstanceSelectionChange, chooseFirstImageField);
}
