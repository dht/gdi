import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { IShortKey, prompt } from '@gdi/platformer';
import { guid4 } from 'shared-base';
import {
    findDescendantsIds,
    findRoot,
    getItemInfo,
    nextOrder,
} from '../utils/flex';
import { downloadJson, dateFilename } from 'shared-base';
import { camelCase } from 'lodash';

type ActionExportLayout = {
    type: 'EXPORT_LAYOUT';
};

function* exportLayout(action: ActionExportLayout) {
    const layout = yield* select(selectors.base.$layoutClean);

    if (!layout || !layout.item) {
        yield put({
            type: 'SHOW_TOAST',
            message: 'No layout data available',
            flavour: 'error',
        });
        return;
    }

    const filename = dateFilename(`layout.${camelCase(layout.name)}.json`);
    downloadJson(filename, layout);

    yield put({
        type: 'SHOW_TOAST',
        message: `Layout data generated as ${filename}`,
        flavour: 'success',
    });
}

export function* root() {
    yield takeEvery('EXPORT_LAYOUT', exportLayout);
}
