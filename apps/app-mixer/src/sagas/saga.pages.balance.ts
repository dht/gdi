import { actions, selectors } from '../store';
import { call, put, select, takeEvery } from 'saga-ts';
import { prompt, Versioning } from '@gdi/web-ui';
import { guid4 } from 'shared-base';
import { IPageInstance } from 'stores/gdi-store-site/dist';

type ChangePageVersionAction = {
    type: 'CHANGE_PAGE_VERSION';
    pageId: string;
};

export function* changePageVersion(action: ChangePageVersionAction) {
    const { pageId } = action;

    const libraryPages = yield* select(selectors.raw.$rawLibraryPages);
    const pageBalance = yield* select(selectors.base.$pageBalance);
    const instancesTitles = yield* select(selectors.base.$pageBalanceTitles);

    const page = libraryPages[pageId];

    if (!pageId || !page) {
        return;
    }

    let { title, pageInstanceBalance } = page;

    if (!pageInstanceBalance) {
    }

    const { didCancel, value } = yield prompt.custom({
        title: `${title}`,
        component: Versioning,
        componentProps: {
            titles: instancesTitles,
            values: pageBalance,
            ctaButtonText: 'Set Balance',
            cancelText: 'Cancel',
        },
    });

    if (didCancel || !value) {
        return;
    }

    const max = Object.keys(value).reduce(
        (acc, key) => {
            const percent = value[key];

            if (percent > acc.max) {
                acc.max = percent;
                acc.id = key;
            }

            return acc;
        },
        {
            id: '',
            max: 0,
        }
    );

    yield put(
        actions.libraryPages.patch(pageId, {
            pageInstanceBalance: value,
            pageInstanceId: max.id,
        })
    );

    yield put(
        actions.pages.patch(pageId, {
            pageInstanceBalance: value,
            pageInstanceId: max.id,
        })
    );
}

export function* root() {
    yield takeEvery('CHANGE_PAGE_VERSION', changePageVersion);
}
