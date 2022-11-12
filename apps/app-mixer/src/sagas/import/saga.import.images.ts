import { actions, selectors } from '../../store';
import { call, delay, fork, put, select, takeEvery } from 'saga-ts';
import { downloadJson } from 'shared-base';
import { dateFilename } from '@gdi/language';
import { prompt, toast } from '@gdi/web-ui';

function* importImages(_action: any) {}

export function* root() {
    yield delay(300);
    yield takeEvery('IMPORT_IMAGES', importImages);
}
