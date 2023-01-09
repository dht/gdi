import { actions, selectors } from '../store';
import { fork, put, select, take } from 'saga-ts';

function* balance() {
    const pages = yield select(selectors.raw.$rawPages);

    for (let page of Object.values(pages)) {
        const { id, pageInstanceBalance } = page as Json;

        if (!id || !pageInstanceBalance) {
            continue;
        }

        const instanceId = choosePage(pageInstanceBalance);

        if (instanceId) {
            yield put(actions.pages.patch(id, { pageInstanceId: instanceId }));
        }
    }
}

function choosePage(balance: Json) {
    let arr: string[] = [];

    Object.keys(balance).forEach((instanceId) => {
        const percent = balance[instanceId];
        for (let i = 0; i < percent; i++) {
            arr.push(instanceId);
        }
    });

    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

export function* root() {
    yield take(['SET_MANY_PAGEINSTANCES', 'SET_MANY_PAGES']);
    yield take(['SET_MANY_PAGEINSTANCES', 'SET_MANY_PAGES']);
    yield fork(balance);
}
