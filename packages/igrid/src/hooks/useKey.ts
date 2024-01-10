import { useCallback, useEffect } from 'react';

export function useKey(key: string, callback: () => void) {
    const onKeydown = useCallback(
        (ev: KeyboardEvent) => {
            if (ev.key === key) {
                callback();
            }
        },
        [callback, key]
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    }, [onKeydown]);
}
