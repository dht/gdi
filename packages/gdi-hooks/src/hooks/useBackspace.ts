import { Callback, useKey } from './useKey';

export function useBackspace(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['Backspace'],
        },
        depArray
    );
}
