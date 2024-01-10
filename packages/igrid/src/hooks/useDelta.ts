import { useCallback, useState } from 'react';

type Fn<T = void> = () => T;

const timestamp = () => new Date().getTime();

export function useDelta() {
    const [ts, setTimestamp] = useState(timestamp());

    const reset = () => {
        setTimestamp(timestamp());
    };

    const delta = useCallback((): number => {
        const now = timestamp();
        return now - ts;
    }, [ts]);

    return [{ delta, reset }] as [{ delta: Fn<number>; reset: Fn }];
}
