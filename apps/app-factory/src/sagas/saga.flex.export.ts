import { actions, selectors } from '../store';
import { call, fork, put, select, takeEvery, delay, take } from 'saga-ts';
import { toast } from '@gdi/web-ui';

import { downloadJson } from 'shared-base';
import { dateFilename } from '@gdi/language';
import { camelCase } from 'shared-base';

type ActionExportLayout = {
    type: 'EXPORT_LAYOUT';
};

function* exportLayout(action: ActionExportLayout) {
    const layout = yield* select(selectors.base.$layoutClean);

    if (!layout || !layout.item) {
        toast.show('No layout data available', 'error');
        return;
    }

    const filename = dateFilename(`layout.${camelCase(layout.name)}.json`);
    downloadJson(filename, layout);

    toast.show(`Layout data generated as ${filename}`, 'success');
}

export function* root() {
    yield takeEvery('EXPORT_LAYOUT', exportLayout);
}
