import { put, fork, takeEvery, select, api, call } from 'saga-ts';
import { actions, selectors, selectorsTasks } from '../store';
import { byField } from '../utils/sort';
import { XDate, time } from '@gdi/language';

type AttachTicketToBlockAction = {
    type: 'SCHEDULE_ATTACH_TICKET_TO_BLOCK';
    id: string;
};

type DetachTicketToBlockAction = {
    type: 'SCHEDULE_DETACH_TICKET_FROM_BLOCK';
};

type Direction = 'up' | 'right' | 'down' | 'left';

export function* focusOnNextBlock(time: string, direction: Direction) {
    const appState = yield* select(selectors.raw.$rawSchedulerState);
    const scheduleBlocks = yield* select(selectors.raw.$rawScheduleBlocks);
    const { day } = appState;

    let nextDay = day;
    let nextHour = time;

    if (direction === 'up' || direction === 'down') {
        const hours = Object.values(scheduleBlocks)
            .filter((i: IScheduleBlock) => !i.isFullWidth)
            .map((i: IScheduleBlock) => i.key)
            .sort();

        const index = hours.indexOf(time);

        const nextIndex = index + (direction === 'down' ? 1 : -1);

        if (hours[nextIndex]) {
            nextHour = hours[nextIndex];
        }
    } else if (direction === 'right') {
        nextDay = (nextDay + 1) % 6;
    } else if (direction === 'left') {
        nextDay = nextDay - 1 < 0 ? 5 : nextDay - 1;
    }

    const isDayTime = timeToNumber(nextHour) < 16;

    yield put(
        actions.appStateScheduler.patch({
            day: nextDay,
            time: nextHour,
            isDayTime,
        })
    );
}

export function* attachTicketToBlock(action: AttachTicketToBlockAction) {
    const { id } = action;

    if (!id) {
        return;
    }

    const appState = yield* select(selectors.raw.$rawSchedulerState);
    const scheduleSessions = yield* select(selectors.raw.$rawScheduleSessions);
    const { day, time } = appState;

    const dateInfo = new XDate() //
        .setDayOfWeek(day)
        .setTime(time)
        .toInfo();

    let ticketKey = '',
        projectKey = '';

    if (id.indexOf('-') > 0) {
        ticketKey = id;
    } else {
        projectKey = id;
    }

    const data = {
        id: dateInfo.dateStringWeek,
        day,
        week: dateInfo.week,
        year: dateInfo.year,
        blockKey: time,
        ticketKey,
        projectKey,
    };

    const existingScheduleSession = Object.values(scheduleSessions).find(
        (item: IScheduleSession) => {
            return (
                item.day === data.day &&
                item.week === data.week &&
                item.year === data.year &&
                item.blockKey === data.blockKey
            );
        }
    );

    let response;

    if (existingScheduleSession) {
        response = yield* api(
            actions.scheduleSessions.patch(existingScheduleSession.id, data)
        );
    } else {
        response = yield* api(actions.scheduleSessions.add(data));
    }

    if (!response.success) {
        console.log(`could not save scheduleSession for ticketKey ${id}`);
        return;
    }

    yield call(focusOnNextBlock, time, 'down');
}

export function* detachTicketFromBlock(action: DetachTicketToBlockAction) {
    const appState = yield* select(selectors.raw.$rawSchedulerState);
    const scheduleSessions = yield* select(selectors.raw.$rawScheduleSessions);
    const { day, time } = appState;

    if (!time) {
        return;
    }

    const dateInfo = new XDate().setDayOfWeek(day).toInfo();

    const existingScheduleSession = Object.values(scheduleSessions).find(
        (item: IScheduleSession) => {
            return (
                item.day === dateInfo.dayOfWeek &&
                item.week === dateInfo.week &&
                item.year === dateInfo.year &&
                item.blockKey === time
            );
        }
    );

    if (!existingScheduleSession) {
        console.log(`day ${day} & time ${time} seem to be already empty`);
        return;
    }

    const response = yield* api(
        actions.scheduleSessions.delete(existingScheduleSession.id)
    );

    if (!response.success) {
        console.log(`failed to detach day ${day} & time ${time}`);
        return;
    }

    yield call(focusOnNextBlock, time, 'down');
}

type MovePositionAction = {
    type: 'SCHEDULE_TABLE_MOVE';
    key: 'up' | 'right' | 'down' | 'left';
};

export function* movePosition(action: MovePositionAction) {
    const appState = yield* select(selectors.raw.$rawSchedulerState);
    const { time } = appState;

    yield call(focusOnNextBlock, time, action.key);
}

export function* setCurrentTime() {
    const appState = yield* select(selectors.raw.$rawSchedulerState);
    const { timeDeltaInMinutes } = appState;

    const now = new Date();
    const dayOfTheMonth = now.getDate();
    now.setMinutes(now.getMinutes() + timeDeltaInMinutes);
    now.setDate(dayOfTheMonth);
    const timeNumber = timeToNumber(time(now));
    const scheduleBlocks = yield* select(selectors.raw.$rawScheduleBlocks);

    const timeText = Object.values(scheduleBlocks)
        .sort(byField('startTime'))
        .find((b) => timeToNumber(b.startTime) > timeNumber);

    if (!timeText) {
        return;
    }

    yield* fork(focusOnNextBlock, timeText.startTime, 'up');
}

export function* loadShiftedTime() {}

export function* root() {
    yield takeEvery('SET_MANY_SCHEDULEBLOCKS', setCurrentTime);
    yield takeEvery('SCHEDULE_ATTACH_TICKET_TO_BLOCK', attachTicketToBlock);
    yield takeEvery('SCHEDULE_DETACH_TICKET_FROM_BLOCK', detachTicketFromBlock);
    yield takeEvery('SCHEDULE_TABLE_MOVE', movePosition);
}

export default root;

const timeToNumber = (time: string) => {
    const parts = time.split(':').map((i) => parseInt(i));
    return parts[0] + parts[1] / 60;
};
