import { actions, selectors } from '../store';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { invokeEvent, isEmpty } from 'shared-base';
import { prompt, toast, ImportExport, LogsConsole } from '@gdi/web-ui';
import axios from 'axios';

const STARTER_KIT_URL =
    'https://raw.githubusercontent.com/dht/gdi-jsons/main/starter.json';

const singles = [
    'fonts',
    'datasets',
    'locale',
    'palette',
    'siteProperties',
    'libraryDatasets',
];

type ActionImportSite = {
    type: 'IMPORT_SITE';
    source: 'json' | 'starterKit';
};

function* importSite(action: ActionImportSite) {
    const { source } = action;

    const defaultValue = source === 'starterKit' ? STARTER_KIT_URL : '';

    const { value, didCancel: didCancel1 } = yield* call(prompt.input, {
        title: 'Import site JSON',
        description: 'Enter a URL with a valid site JSON:',
        placeholder: 'https://app.firebase.com/backup/site.json',
        defaultValue,
        submitButtonText: 'Import',
    });

    if (didCancel1) {
        return;
    }

    const response: any = yield* call(axios.get as any, value);

    if (!response || !response.data) {
        toast.show('Invalid JSON', 'error');
        return;
    }

    const url = 'https';
    toast.show(`Site data imported from ${url}`);
    const { value: value2, didCancel: didCancel2 } = yield prompt.custom({
        title: '',
        component: ImportExport,
        componentProps: {
            id: 'ModalImportSite',
            json: response.data,
            ctaButtonText: 'Import',
        },
    });
    if (didCancel2 || isEmpty(value2)) {
        return;
    }

    yield put(
        actions.appStateMixer.patch({
            showConsoleLogs: true,
        })
    );

    invokeEvent('ADHOC_LOG', {
        eventId: 'Starting import',
    });

    for (let key of Object.keys(value2)) {
        const nodeValue = value2[key];

        if (singles.includes(key)) {
            invokeEvent('ADHOC_LOG_START', {
                eventId: `Importing ${key}`,
                statusText: 'importing...',
            });

            yield put(actions[key].patch(nodeValue));
        } else {
            const ids = Object.keys(nodeValue);

            invokeEvent('ADHOC_LOG_START', {
                eventId: `Importing ${key}`,
                statusText: 'importing ' + ids.length + ' items...',
            });

            for (let id of ids) {
                const item = nodeValue[id];
                yield put((actions as any)[key]['add'](item));
            }
        }

        yield delay(100);

        invokeEvent('ADHOC_LOG_END', {
            eventId: `Importing ${key}`,
            statusText: 'success',
            result: 'success',
        });
    }

    yield delay(1000);

    yield put(
        actions.appStateMixer.patch({
            showConsoleLogs: false,
        })
    );

    toast.show('Site data imported successfully');

    try {
        const keysPages = Object.keys(value2.libraryPages);
        yield invokeEvent('navigate', { path: `/admin/pages/${keysPages[0]}` });

        const keysInstances = Object.keys(value2.libraryInstances);
        yield put(actions.currentIds.patch({selectedInstanceId: keysInstances[0]})); // prettier-ignore
    } catch (_err) {}
}

export function* root() {
    yield delay(300);
    // yield call(importSite);
    yield takeEvery('IMPORT_SITE', importSite);
}
