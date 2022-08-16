import { Callback, useKey } from './useKey';

export function useEnter(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['Enter'],
        },
        depArray
    );
}
