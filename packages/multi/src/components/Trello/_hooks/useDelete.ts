import { Callback, useKey } from './useKey';

export function useDelete(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['Delete'],
        },
        depArray
    );
}
