import { useEffect } from 'react';

type Callback = () => void;
type Callbacks = Record<string, Callback>;

const callbacks: Callbacks = {};

export function usePubSub(id: string, callback: Callback) {
    useEffect(() => {
        callbacks[id] = callback;

        return () => {
            delete callbacks[id];
        };
    });
}

export function notifyPubSub(id: string) {
    const callback = callbacks[id];

    if (callback) {
        callback();
    }
}
