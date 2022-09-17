import { Callback, useKey } from './useKey';

export function useNumpad(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        },
        depArray
    );
}
