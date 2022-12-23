import { Callback, useKey } from './useKey';

export function useStartTyping(callback: Callback, depArray: any[] = []) {
    return useKey(
        callback,
        {
            filterRegex: /[a-zA-Z0-9א-ת-#]/,
            preventFocusSteal: true,
        },
        depArray
    );
}
