import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/web-ui';
import { guid4 } from 'shared-base';

function* editPage() {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
}

function* duplicatePageInstance() {
    const pageInstance = yield* select(selectors.base.$pageInstance);
    const nextInstanceVersion = yield* select(selectors.base.$nextInstanceVersion); // prettier-ignore
    const instances = yield* select(selectors.base.$instancesForPageInstance);
    const instancesProps = yield* select(selectors.base.$instancesPropsForCurrentPage); // prettier-ignore

    if (!pageInstance) {
        return;
    }

    let pageInstanceId = guid4(),
        instanceId = '';

    // duplicate pageInstance
    yield put(
        actions.libraryPageInstances.add({
            ...pageInstance,
            id: pageInstanceId,
            version: nextInstanceVersion,
        })
    );

    // duplicate instances
    for (let instance of instances) {
        instanceId = guid4();

        yield put(
            actions.libraryInstances.add({
                ...instance,
                pageInstanceId,
                id: instanceId,
            })
        );
    }

    // duplicate props
    yield put(
        actions.currentIds.patch({
            pageInstanceId,
        })
    );
}

function* promotePageInstance() {
    const pageInstance = yield* select(selectors.base.$pageInstance);
    const nextInstanceVersion = yield* select(selectors.base.$nextInstanceVersion); // prettier-ignore
    const instances = yield* select(selectors.base.$instancesForPageInstance);
    const instancesProps = yield* select(selectors.base.$instancesPropsForCurrentPage); // prettier-ignore

    if (!pageInstance) {
        return;
    }

    let pageInstanceId = guid4(),
        instanceId = '';

    // patch page
    yield put(
        actions.pages.patch(pageInstance.pageId, {
            pageInstanceId: pageInstanceId,
        })
    );

    // duplicate pageInstance
    yield put(
        actions.pageInstances.add({
            ...pageInstance,
            id: pageInstanceId,
            version: nextInstanceVersion,
        })
    );

    // duplicate instances
    for (let instance of instances) {
        instanceId = guid4();

        yield put(
            actions.instances.add({
                ...instance,
                pageInstanceId,
                id: instanceId,
            })
        );
    }

    // duplicate props
    console.log('instancesProps ->', instancesProps);

    yield put(
        actions.currentIds.patch({
            pageInstanceId,
        })
    );
}

function* resetPageInstance() {
    const pageInstance = yield* select(selectors.base.$pageInstance);
    const instances = yield* select(selectors.base.$instancesForPageInstance);
    const instancesProps = yield* select(selectors.base.$instancesPropsForCurrentPage); // prettier-ignore

    if (!pageInstance) {
        return;
    }

    // duplicate instances
    for (let instance of instances) {
        yield put(actions.libraryInstances.delete(instance.id));
    }

    // delete props
    console.log('instancesProps ->', instancesProps);
}

function* deletePageInstance() {
    const pageInstance = yield* select(selectors.base.$pageInstance);
    const instances = yield* select(selectors.base.$instancesForPageInstance);
    const instancesProps = yield* select(selectors.base.$instancesPropsForCurrentPage); // prettier-ignore

    if (!pageInstance) {
        return;
    }

    yield put(
        actions.currentIds.patch({
            pageInstanceId: '',
        })
    );

    // delete pageInstance
    yield put(actions.libraryPageInstances.delete(pageInstance.id));

    // duplicate instances
    for (let instance of instances) {
        yield put(actions.libraryInstances.delete(instance.id));
    }

    // delete props
    console.log('instancesProps ->', instancesProps);
}

function* selectPageInstanceOnNavigation() {
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const pageInstanceId = yield* select(selectors.base.$pageInstanceId);
    const pageInstances = yield* select(selectors.raw.$rawLibraryPageInstances);

    const { pageId } = currentIds;

    let pageInstance: IPageInstance | undefined;

    pageInstance = pageInstances[pageInstanceId];

    if (pageInstance && pageInstance.pageId === pageId) {
        return;
    }

    pageInstance = Object.values(pageInstances).find(
        (i) => i.pageId === pageId
    );

    if (pageInstance) {
        yield put(
            actions.currentIds.patch({ pageInstanceId: pageInstance.id })
        );
    }
}

export function* root() {
    yield takeEvery('EDIT_PAGE', editPage);
    yield takeEvery('DUPLICATE_PAGE_INSTANCE', duplicatePageInstance);
    yield takeEvery('PROMOTE_PAGE_INSTANCE', promotePageInstance);
    yield takeEvery('RESET_PAGE_INSTANCE', resetPageInstance);
    yield takeEvery('DELETE_PAGE_INSTANCE', deletePageInstance);
    yield takeEvery('SELECT_PAGE_INSTANCE_ON_NAVIGATION', selectPageInstanceOnNavigation); // prettier-ignore
}
