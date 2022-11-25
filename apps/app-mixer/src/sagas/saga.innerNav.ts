import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { customEventChannel } from './channels/channel.customEvent';
import { invokeEvent } from 'shared-base';

function* navigate(action: any) {
    const { datasetId } = action;

    if (datasetId) {
        yield call(invokeEvent, 'navigate', {
            path: `/admin/datasets#${datasetId}`,
        });
    }
}

export function* root() {
    const channel = customEventChannel('showDataset');
    yield takeEvery(channel, navigate);
}
