import { setLatency } from '@gdi/language';
import { select, takeEvery } from 'saga-ts';
import { selectors } from '../store';
import { tasks } from '@gdi/store-tasks';

type ClientLatencyAction = {
    type: string;
    payload: {
        startTimestamp: number;
    };
};

export function* clientLatency(action: ClientLatencyAction) {
    if (!action) {
        return;
    }

    const { startTimestamp } = action.payload ?? {};

    if (!startTimestamp) {
        return;
    }

    const tasksState = yield* select(selectors.raw.$rawTasksState);
    const { storeId } = tasksState;

    // server timestamp is the source of truth
    // no need to set latency
    if (storeId === 'server') {
        return;
    }

    const latency = tasks.utils.calculateMobileLatency(startTimestamp);
    setLatency(latency);
}

export function* root() {
    yield takeEvery('PATCH_ACTIVETASK', clientLatency);
}

export default root;
