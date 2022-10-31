import { delay, takeEvery, put, call } from 'saga-ts';
import { actions } from '../store';
import { prompt, toast } from '@gdi/web-ui';
import { dateDb } from '@gdi/language';

type StatClickAction = {
    type: 'STAT_CLICK';
    stat: IStat;
    withShift?: boolean;
};

export function* updateJourney(stat: IStat, newValue: value) {
    const { id } = stat;

    const now = new Date();
    const date = dateDb(now);
    const journeyId = `${id}_${date}`;

    const journeyItem = {
        id: journeyId,
        date,
        statId: id,
        value: newValue,
    };

    yield* put(actions.statsJourneys.patch(journeyId, journeyItem));
}

export function* statClickNudge(action: StatClickAction) {
    const { stat, withShift } = action;
    const { id, value, unit } = stat;

    const delta = unit === 'time' ? 5 : 1;

    let newValue = Math.max(withShift ? value - delta : value + delta, 0);

    yield* put(actions.stats.patch(id, { value: newValue }));
    yield* call(updateJourney, stat, newValue);
}

export function* statClickValue(action: StatClickAction) {
    const { stat } = action;
    const { id, title } = stat;
    const { value, didCancel: didCancel1 } = yield* call(prompt.input, {
        title: 'New value',
        description: `Enter a new value for ${title}:`,
        placeholder: '',
        submitButtonText: 'Set',
    });

    if (didCancel1 || !value) {
        return;
    }

    const newValue = parseInt(value as string);

    yield* put(actions.stats.patch(id, { value: newValue }));
    yield* call(updateJourney, stat, newValue);
}

export function* statClick(action: StatClickAction) {
    yield delay(0);

    const { stat, withShift } = action;
    const { clickEffect } = stat;

    if (clickEffect === 'nudge') {
        yield* statClickNudge(action);
    } else {
        yield* statClickValue(action);
    }
}

export function* root() {
    yield delay(10);
    yield takeEvery('STAT_CLICK', statClick);
}

export default root;
