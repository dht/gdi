import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { parseMixerRequestToActions } from '../instructions/mixerInstructions';
import { IMixerRequest } from '../types';
import { extractTree } from '../instructions/extractTree';
import { PromotePage } from '../components/PromotePage/PromotePage';
import { prompt, toast } from '@gdi/web-ui';

function* getState() {
    const state = yield* select((s) => ({
        ...s.mixer,
        ...s.site,
    }));

    return state;
}

function* promotePageInstance() {
    const pageInstance = yield* select(selectors.base.$pageInstance);
    const page = yield* select(selectors.base.$page);
    const { title } = page || {};
    const { version } = pageInstance || {};

    if (!pageInstance) {
        return;
    }

    const { didCancel, value } = yield prompt.custom({
        title: 'Promote Page',
        submitButtonText: 'Promote',

        component: PromotePage,

        componentProps: {
            paragraph: `Go live with this version (${version}) of ${title}?`,
            link: 'https://www.google.com',
            agreeText: 'Yes, Make it live',
            cancelText: 'Cancel',
        },
    });

    if (didCancel || !value) {
        return;
    }

    yield call(deleteSitePageInstanceContent, pageInstance.id);

    const { id } = pageInstance;

    const state = yield* call(getState);

    const mixerRequest: IMixerRequest = {
        source: 'library',
        destination: 'site',
        itemId: id,
        entityType: 'pageInstances',
    };

    const actionsArr = parseMixerRequestToActions(mixerRequest, state);

    const newId = actionsArr[0].payload.id;

    for (const action of actionsArr) {
        yield* put(action);
    }

    yield put(
        actions.pages.patch(pageInstance.pageId, {
            pageInstanceId: newId,
        })
    );

    toast.show('Page promoted successfully');
}

export function* deleteSitePageInstanceContent(id: string) {
    const state = yield* call(getState);

    const tree = extractTree(
        {
            source: 'site',
            destination: 'site',
            itemId: id,
            entityType: 'pageInstances',
        },
        state
    );

    const { instances } = tree;

    for (let instanceId of Object.keys(instances || {})) {
        yield put(actions.instances.delete(instanceId));
        yield put(actions.instancesProps.delete(instanceId));
    }
}

export function* root() {
    yield takeEvery('PROMOTE_PAGE_INSTANCE', promotePageInstance);
}
