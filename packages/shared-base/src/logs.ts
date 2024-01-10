import { invokeEvent } from './events';

export const log = (eventId: string, data?: Json) => {
    invokeEvent('ADHOC_LOG', {
        eventId,
        ...data,
    });
};

export const logStart = (eventId: string, statusText: string, data?: Json) => {
    invokeEvent('ADHOC_LOG_START', {
        eventId,
        statusText,
        ...data,
    });
};

export const logEnd = (
    eventId: string,
    statusText: string,
    result: string,
    data?: Json
) => {
    invokeEvent('ADHOC_LOG_END', {
        eventId,
        statusText,
        result,
        ...data,
    });
};
