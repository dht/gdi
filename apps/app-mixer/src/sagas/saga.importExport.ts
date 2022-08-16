import { actions, selectors } from '../store';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { downloadJson, dateFilename } from 'shared-base';
import { prompt, toast } from '@gdi/web-ui';

function* exportSite(_action: any) {
    const siteData = yield* select(selectors.base.$siteData);
    const filename = dateFilename('siteData.json');
    downloadJson(filename, siteData);

    toast.show(`Site data generated as ${filename}`);
}

function* importSite(_action: any) {
    const { value, didCancel: didCancel1 } = yield* call(prompt.input, {
        title: 'Import site JSON',
        description: 'Enter a URL with a valid site JSON:',
        placeholder: 'https://app.firebase.com/backup/site.json',
        warning:
            'This will replace all the current site structure & data. Please make sure you back up your current site data before hand',
        submitButtonText: 'Import',
    });

    if (didCancel1) {
        return;
    }

    const { didCancel: didCancel2 } = yield* call(prompt.confirm, {
        title: 'Import site JSON',
        description: `Are you sure you want to OVERWRITE the site structure & data?`,
        warning: 'This operation CANNOT be undone',
        submitButtonText: "Yes, I'm sure",
    });

    if (didCancel2) {
        return;
    }

    const url = 'https';

    toast.show(`Site data imported from ${url}`);
}

export function* root() {
    yield delay(300);
    yield takeEvery('IMPORT_SITE', importSite);
    yield takeEvery('EXPORT_SITE', exportSite);
}
