import { Callback, useKey } from './useKey';

export function useFunctionKeys(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: [
                'F1',
                'F2',
                'F3',
                'F4',
                'F5',
                'F6',
                'F7',
                'F8',
                'F9',
                'F10',
                'F11',
                'F12',
            ],
        },
        depArray
    );
}
