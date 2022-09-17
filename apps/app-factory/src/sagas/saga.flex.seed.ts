import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { IFlexEntity } from 'stores/gdi-store-factory/dist';
import { definitions } from '../components/Layouts/definitions/main';
import { guid, guid4 } from 'shared-base';
import { duplicateItems } from '../utils/flex';
import { clear } from './saga.flex.split';

type ActionSeedFlex = {
    type: 'FLEX_SEED';
    withId: string;
};

function* seedFlex(action: ActionSeedFlex) {
    const { withId } = action;

    const layout = yield* select(selectors.base.$layoutWithAllItems);
    const currentIds = yield* select(selectors.raw.$rawCurrentIds);
    const { layoutId, resolutionId } = currentIds;

    if (!layout || !layout.items || !resolutionId) {
        return;
    }

    // cannot reset 1080p to self
    if (resolutionId === withId) {
        yield put({
            type: 'SHOW_TOAST',
            message: 'Cannot reset 1080p to self',
            flavour: 'warning',
        });
        return;
    }

    yield call(clear);

    const { items } = layout;

    let itemsToAdd: IFlexEntity[] = [];

    if (withId === 'blank') {
        const id = guid4();

        const itemsToAdd = [
            {
                id,
                parentId: '',
                entityType: 'container',
                resolution: resolutionId,
                direction: 'row',
                order: 1,
            },
            {
                id: guid4(),
                parentId: id,
                entityType: 'item',
                resolution: resolutionId,
                locationId: 'main',
                order: 2,
            },
        ];

        for (let item of itemsToAdd) {
            yield put(actions.layouts.pushItem(layoutId, item));
        }
    } else {
        const itemsForSourceResolution = items.filter(
            (i: IFlexEntity) => i.resolution === '1080p'
        );

        itemsToAdd = duplicateItems(itemsForSourceResolution, {
            resolution: resolutionId,
        });

        for (let item of itemsToAdd) {
            yield put(actions.layouts.pushItem(layoutId, item));
        }
    }
}

export function* root() {
    yield takeEvery('FLEX_SEED', seedFlex);
}
