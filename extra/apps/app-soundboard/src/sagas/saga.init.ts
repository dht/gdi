import { delay, put, fork } from 'saga-ts';
import { actions } from '../store';
import { XDate } from '@gdi/language';

export function* init() {
    const now = new XDate();
    const year = now.toInfo().year;
    const week = now.toInfo().week;

    const start = now.add(-2, 'week');
    const startYear = start.toInfo().year;
    const startWeek = start.toInfo().week;

    yield put(
        actions.appStateSoundboard.patch({
            startYear,
            startWeek,
            year,
            week,
        })
    );
}

export function* root() {
    yield delay(50);
    yield* fork(init);
}

export default root;
