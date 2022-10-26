import { actions } from '../actions';
import { api, put, select, takeEvery } from 'saga-ts';
import { selectors } from '../selectors.index';

type EstimationAction = {
    type: string;
    value: number;
    estimationTitle: string;
};

export function* setEstimation(action: EstimationAction) {
    const activeTask = yield* select(selectors.base.$activeTask);

    if (!activeTask.isLoaded) {
        return;
    }

    const { ticket } = activeTask;

    const response = yield* api(
        actions.tickets.patch(ticket.id, {
            timeEstimate: action.value,
        })
    );

    if (response.status === 200) {
        const message = `${ticket.key} time estimation is now "${action.estimationTitle}"`;

        yield put({
            type: 'SHOW_TOAST',
            flavour: 'success',
            message,
        });
    }
}

export function* root() {
    yield takeEvery('BLKR_SET_ESTIMATION', setEstimation);
}
