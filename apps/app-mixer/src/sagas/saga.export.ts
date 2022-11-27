import { selectors } from '../store';
import { delay, select, takeEvery } from 'saga-ts';
import { downloadJson, isEmpty } from 'shared-base';
import { dateFilename } from '@gdi/language';
import { prompt, toast, ImportExport } from '@gdi/web-ui';

function* exportSite(_action: any) {
    const siteData = yield* select(selectors.base.$siteData);
    const libraryData = yield* select(selectors.base.$libraryData);
    const filename = dateFilename('siteData.json');

    const { value, didCancel } = yield prompt.custom({
        title: 'Export site',
        component: ImportExport,
        componentProps: {
            id: 'ModalExportSite',
            ctaButtonText: 'Export',
            showExportMessage: true,
            json: {
                ...siteData,
                ...libraryData,
            },
        },
    });

    if (didCancel || isEmpty(value)) {
        return;
    }

    downloadJson(filename, value);

    toast.show(`Site data generated as ${filename}`);
}

export function* root() {
    yield delay(300);
    yield takeEvery('EXPORT_SITE', exportSite);
}
