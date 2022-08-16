import { Callback, useKey } from './useKey';

export function useQuestionMark(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterKeys: ['?'],
        },
        depArray
    );
}
