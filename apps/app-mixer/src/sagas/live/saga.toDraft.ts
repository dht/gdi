import { actions, selectors } from '../../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt } from '@gdi/web-ui';
import { guid4 } from 'shared-base';

type ToDraftAction = {
    type: 'PATCH_LIBRARYPAG';
    pageId: string;
};

function* toDraft(action: ToDraftAction) {
    console.log('toDraft ->', true);

    console.log('action ->', action);
}

export function* root() {
    yield takeEvery(
        (action: any) =>
            action.type === 'PATCH_LIBRARYPAG' &&
            action.payload?.status !== 'production',
        toDraft
    );
}
