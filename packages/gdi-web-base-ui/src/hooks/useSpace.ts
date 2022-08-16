import { Callback, useKey } from './useKey';

export function useSpace(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['Space'],
        },
        depArray
    );
}
