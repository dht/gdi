import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/platformer';
import { guid4 } from 'shared-base';
import LibraryBlocks from '../components/LibraryBlocks/LibraryBlocks';
import { getSchemaPropertiesByType } from '@gdi/store-mixer';

type ActionBlockSelect = {
    type: 'ELEMENT_BLOCK_SELECT';
    blockId: string;
};

function* duplicateBlockFromLibrary(blockId: string) {
    const blocks = yield* select(selectors.raw.$rawBlocks);

    if (blocks[blockId]) {
        return;
    }

    const libraryBlocks = yield* select(selectors.raw.$rawLibraryBlocks);
    const libraryBlock = libraryBlocks[blockId];

    yield put(actions.blocks.add(libraryBlock));
}

function* imagesFromSampleData(blockId: string, instanceId: string) {
    const libraryBlocks = yield* select(selectors.raw.$rawLibraryBlocks);
    const libraryBlock = libraryBlocks[blockId];

    const sampleDataByType = getSchemaPropertiesByType(libraryBlock, [
        'image',
        'color',
    ]);

    const change = Object.keys(sampleDataByType).reduce((output, key) => {
        const keyWithUnderscores = key.replace(/\./g, '_');
        output[keyWithUnderscores] = sampleDataByType[key];
        return output;
    }, {} as Json);

    yield put(actions.instancesProps.patch(instanceId, change));
}

function* switchBlockForElement(action: ActionBlockSelect) {
    const { blockId } = action;

    yield call(duplicateBlockFromLibrary, blockId);

    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const selectedInstanceId = currentIds.selectedInstanceId;
    yield call(imagesFromSampleData, blockId, selectedInstanceId);

    yield put(
        actions.instancesBlocks.patch(selectedInstanceId, {
            blockId,
        })
    );
}

function* addElementWithBlock(action: ActionBlockSelect) {
    console.log('addWithBlock switch ->', action);
}

function* elementBlockSelect(action: ActionBlockSelect) {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const selectedInstanceId = currentIds.selectedInstanceId;

    if (!selectedInstanceId) {
        return;
    }

    if (selectedInstanceId === '<NEW>') {
        yield call(addElementWithBlock, action);
    } else {
        yield call(switchBlockForElement, action);
    }
}

export function* root() {
    yield takeEvery('ELEMENT_BLOCK_SELECT', elementBlockSelect);
}
