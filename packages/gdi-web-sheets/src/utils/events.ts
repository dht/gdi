import { useEffect } from 'react';

export const invokeEvent = (type: string, data: Json) => {
    const event = new CustomEvent(type, { detail: data });
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

export function useCustomEvent(
    eventName: string,
    callback: (data: Json) => void
) {
    useEffect(() => {
        const clear = addListener(eventName, callback);

        return () => {
            clear();
        };
    }, []);
}
