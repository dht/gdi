import { RefObject, useEffect } from 'react';

type Fn = (ev: any) => void;

export function useListener(
    eventName: string,
    ref: RefObject<HTMLElement>,
    callback: Fn
) {
    useEffect(() => {
        const current = ref.current;
        if (!current) return;

        current.addEventListener(eventName, callback);

        return () => {
            current.removeEventListener(eventName, callback);
        };
    }, [ref, eventName, callback]);
}
