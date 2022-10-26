import { actions } from '../store';
import { delay, fork, put } from 'saga-ts';

function* api() {
    const promises = [
        yield* put(actions.appStateOrders.get()),
        yield* put(actions.orders.get({})),
        yield* put(actions.orderJournals.get({})),
        yield* put(actions.coupons.get({})),
    ];

    yield Promise.all(promises);

    yield delay(100);
}

export function* root() {
    yield delay(300);
    yield* fork(api);
}
