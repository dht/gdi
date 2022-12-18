import { actions, selectors } from '../store';
import { delay, put, select, takeEvery } from 'saga-ts';
import { dateDbLongInMinutes, durationToMinutes } from '@gdi/language';
import { invokeEvent } from 'shared-base';
import { prompt, Snoozer, toast } from '@gdi/web-ui';

type ActionSnooze = {
    type: 'INBOX_SNOOZE_ITEM';
    item: IInboxMessage;
};

export function* snoozeItem(action: ActionSnooze) {
    const { item } = action;
    const { id, title } = item;

    const shortKeys = yield* select(selectors.base.$snoozeShortKeys);

    const { value, didCancel } = yield prompt.custom({
        title: 'Snooze Duration',
        component: Snoozer,
        componentProps: {
            shortKeys,
            title,
        },
    });

    if (didCancel || !value) {
        return;
    }

    const shortTitle = title.substring(0, 20) + '...';

    const minutesToSnooze = durationToMinutes(value);
    const snoozeUntil = dateDbLongInMinutes(minutesToSnooze);

    yield put(
        actions.inboxMessages.patch(id, {
            snoozeUntil,
        })
    );

    toast.show(`"${shortTitle}" was snoozed for ${value} `, 'success');
}

type ActionOpen = {
    type: 'INBOX_OPEN_ITEM';
    item: IInboxMessage;
};

export function* openItem(action: ActionOpen) {
    const { item } = action;
    const { messageType, contentUrl, ctaUrl } = item;

    switch (messageType) {
        case 'quickTip':
            yield put(
                actions.appStateDashboard.patch({
                    showQuickTip: true,
                    quickTipUrl: contentUrl,
                })
            );
            break;
        case 'reader':
            yield put(
                actions.appStateDashboard.patch({
                    showReader: true,
                    readerUrl: contentUrl,
                })
            );
            break;
        case 'interrupt':
            yield put(
                actions.appStateDashboard.patch({
                    showMainDisplay: true,
                    mainDisplayData: item,
                })
            );

        case 'info':
            if (!ctaUrl) {
                return;
            }
            navigate(ctaUrl);
            break;
    }
}

function navigate(url: string) {
    if (!url) {
        return;
    }

    if (url.includes('http')) {
        window.open(url, '_blank');
    } else {
        invokeEvent('navigate', { path: url });
    }
}
export function* root() {
    yield delay(10);
    yield takeEvery('INBOX_SNOOZE_ITEM', snoozeItem);
    yield takeEvery('INBOX_OPEN_ITEM', openItem);
}

export default root;
