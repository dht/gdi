import { useMemo } from 'react';
import { debounce } from 'shared-base';
import { Callback, useKey } from './useKey';

export function useDebounce(
    callback: Callback,
    duration: number,
    depArray: any[] = []
) {
    console.log('duration ->', duration);

    const debouncedMethod = useMemo(() => {
        console.log('1 ->', 1);
        return debounce(callback, duration);
    }, depArray);

    return debouncedMethod;
}
