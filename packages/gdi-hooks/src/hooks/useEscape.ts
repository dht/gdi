import { Callback, useKey } from './useKey';

export function useEscape(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['Escape'],
        },
        depArray
    );
}
