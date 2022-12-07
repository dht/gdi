import { intervalToDuration } from '@gdi/language';
import { ISession, ITicket, ISessionStats, IWorklogs } from '../types';
import { deltaInSeconds, duration } from '@gdi/language';

type Params = {
    ticket?: ITicket;
    session?: ISession;
    worklogs: IWorklogs;
};

export const calculateSession = ({
    ticket,
    session,
    worklogs,
}: Params): ISessionStats => {
    const {
        timeEstimate: estimation = 0,
        progress: progressBeforeSession = 0,
    } = ticket ?? {};

    const {
        lastVerb,
        startTimestamp = 0,
        breakTimeTotal: totalBreakInSeconds = 0,
        breakStartTimestamp = 0,
    } = session ?? {};

    const isInBreak = lastVerb === 'pause';

    const estimationExists = estimation > 0;
    const sessionElapsedTimeWithBreaks = deltaInSeconds(startTimestamp);
    const breakTimeCurrent = isInBreak ? deltaInSeconds(breakStartTimestamp) : 0; // prettier-ignore
    const breakTimeTotal = Math.round(totalBreakInSeconds + breakTimeCurrent);
    const sessionElapsedTime = Math.round(sessionElapsedTimeWithBreaks - breakTimeTotal); // prettier-ignore
    const progressWithSession = progressBeforeSession + sessionElapsedTime;
    const currentSessionSequence = Object.values(worklogs).length + 1;

    let timeLeft: number, percent: number, oneHourPercent: number;

    if (estimationExists) {
        timeLeft = Math.max(estimation - progressWithSession, 0);
        percent = progressWithSession / estimation;
        oneHourPercent = 0;
    } else {
        timeLeft = 0;
        percent = 0;
        oneHourPercent = sessionElapsedTime / (60 * 60);
    }

    let durationObject: any;

    if (sessionElapsedTime) {
        const d =
            intervalToDuration({
                start: 0,
                end: sessionElapsedTime * 1000,
            }) || {};

        durationObject = {
            totalSeconds: sessionElapsedTime,
            hours: d.hour,
            minutes: d.minute,
            seconds: d.second,
            totalText: duration(sessionElapsedTime),
        };
    }

    return {
        startTimestamp,
        estimationExists,
        sessionElapsedTime,
        sessionElapsedTimeWithBreaks,
        breakTimeTotal,
        breakTimeCurrent,
        estimation,
        progressBeforeSession,
        progressWithSession,
        timeLeft,
        percent,
        oneHourPercent,
        duration: durationObject,
        isInBreak,
        currentSessionSequence,
        isRunning: !isInBreak,
    };
};

export const calculateMobileLatency = (startTimestamp: number) => {
    const now = new Date().getTime();
    const sessionElapsedTimeWithBreaks = now - startTimestamp;
    return Math.min(sessionElapsedTimeWithBreaks, 0);
};

/*
For debugging purposes, to move time faster.
To use, uncomment the method and change this line:

const now = ts();
to:
const now = minutesInsteadOfSeconds(ts(), startTimestamp);

/*
export const minutesInsteadOfSeconds = (
    now: number,
    startTimestamp: number
): number => {
    const deltaSeconds = deltaInSeconds(startTimestamp);
    const deltaMinutes = deltaSeconds * 60 * 1000;
    now += deltaMinutes;
    return now;
};
*/
