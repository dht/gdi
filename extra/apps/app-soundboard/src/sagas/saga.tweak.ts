import { soundboard } from '@gdi/store-soundboard';
import { take, fork, select, takeEvery, put, call } from 'saga-ts';
import { actions, selectors } from '../store';
import { SimpleDate } from '@gdi/language';

export type UpdateAction = {
    weekPointer: WeekPointer;
    day?: number;
    minutes: number;
};

function* updateMinutesForDay(action: UpdateAction & { type: string }) {
    const { weekPointer, day, minutes } = action;
    const expected = yield* select(selectors.raw.$rawExpectedManas);
    const projectKey = yield* select(selectors.base.$selectedProjectKey);

    if (!projectKey) {
        return;
    }

    const changedDate = SimpleDate.fromWeek(weekPointer, day).toText();

    const expectedManaItem = Object.values(expected).find((item: IMana) => {
        return item.projectKey === projectKey && item.date === changedDate;
    });

    if (expectedManaItem) {
        yield put(
            actions.expectedManas.patch(expectedManaItem.id, {
                minutes,
            })
        );
    } else {
        yield put(
            actions.expectedManas.add({
                date: changedDate,
                minutes,
                projectKey,
            })
        );
    }
}

function* updateMinutesForWeek(action: UpdateAction & { type: string }) {
    const { weekPointer, minutes } = action;
    const projectKey = yield* select(selectors.base.$selectedProjectKey);

    if (!projectKey) {
        return;
    }

    for (let day = 0; day <= 6; day++) {
        yield* fork(updateMinutesForDay, {
            type: '',
            weekPointer,
            day,
            minutes,
        });
    }
}

export function* root() {
    yield takeEvery('UPDATE_MINUTES_FOR_DAY', updateMinutesForDay);
    yield takeEvery('UPDATE_MINUTES_FOR_WEEK', updateMinutesForWeek);
}

export default root;
