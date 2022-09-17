import { useEffect } from 'react';
import { addListener } from 'shared-base';

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
