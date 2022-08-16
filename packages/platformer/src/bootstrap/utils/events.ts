import { LogCallback, Logger, LogMeta } from 'axios-oauth';

export const invokeEvent = (type: string, meta: LogMeta, data?: Json) => {
    const event = new CustomEvent(type, { detail: { ...meta, ...data } });
    document.dispatchEvent(event);
};

type EventCallback = (data: Json) => void;

export const addListener = (type: string, callback: EventCallback) => {
    const listener = (event: any) => {
        callback(event.detail);
    };

    document.addEventListener(type, listener);

    return () => {
        document.removeEventListener(type, listener);
    };
};

export const logCallback: LogCallback = invokeEvent;
