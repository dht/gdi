import { actions, selectors } from '../../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/web-ui';
import { guid4 } from 'shared-base';

type ToLiveAction = {
    type: 'PATCH_LIBRARYPAG';
    id: string;
};

function* copyPage(pageId: string) {
    console.time('copyPage');
    console.log('pageId ->', pageId);
    console.timeEnd('copyPage');
}

function* copyPageInstance(pageInstanceId: string) {
    console.time('copyPageInstance');
    console.log('pageInstanceId ->', pageInstanceId);
    console.timeEnd('copyPageInstance');
}

function* copyWidgets(pageInstanceId: string) {
    console.time('copyWidgets');
    console.log('pageInstanceId ->', pageInstanceId);
    console.timeEnd('copyWidgets');
}

function* copyInstances(pageInstanceId: string) {
    console.time('copyInstances');
    console.log('pageInstanceId ->', pageInstanceId);
    console.timeEnd('copyInstances');
}

function* copyInstancesProps(pageInstanceId: string) {
    console.time('copyInstancesProps');
    console.log('pageInstanceId ->', pageInstanceId);
    console.timeEnd('copyInstancesProps');
}

function* copyImages(pageInstanceId: string) {
    console.time('copyImages');
    console.log('pageInstanceId ->', pageInstanceId);
    console.timeEnd('copyImages');
}

function* toLive(action: ToLiveAction) {
    console.log('toLive ->', true);

    const { id } = action;

    const libraryPages = yield* select(selectors.raw.$rawLibraryPages);
    const page = libraryPages[id];

    console.log('id, page ->', id, page);

    if (!id || !page) {
        return;
    }

    const pageInstanceId = 'i1';

    const assetsPerPageInstances = yield* select(
        selectors.base.$libraryPageInstancesAssets
    );

    const assetsPerPageInstance = assetsPerPageInstances[pageInstanceId];

    console.log('assetsPerPageInstance ->', assetsPerPageInstance);

    yield copyPage(id);
    yield copyPageInstance(assetsPerPageInstance);
    yield copyWidgets(assetsPerPageInstance);
    yield copyInstances(assetsPerPageInstance);
    yield copyInstancesProps(assetsPerPageInstance);
    yield copyImages(assetsPerPageInstance);
}

export function* root() {
    yield takeEvery(
        (action: any) =>
            action.type === 'PATCH_LIBRARYPAG' &&
            action.payload?.status === 'production',
        toLive
    );
}
