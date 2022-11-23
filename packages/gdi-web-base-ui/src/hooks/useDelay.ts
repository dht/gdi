import { useEffect, useRef } from 'react';
import { useBoolean } from 'react-use';

export function useDelay(duration: number) {
    const [ready, setReady] = useBoolean(false);

    const timeout = useRef<number>();

    useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setReady(true);
        }, duration);

        return () => clearTimeout(timeout.current);
    }, []);

    return ready;
}
