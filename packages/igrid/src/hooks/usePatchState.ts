import { useMount } from './useMount';
import { useCallback, useState } from 'react';
import { getJson, setJson } from '../utils/storage';

type UsePatchStateReturn<T> = [
    T,
    (change: T) => void,
    {
        set: (newState: T) => void;
    }
];

export function usePatchState<T>(
    initialState: T,
    localStorageKey?: string
): UsePatchStateReturn<T> {
    const [state, setState] = useState<T>(initialState);

    useMount(() => {
        if (!localStorageKey) {
            return;
        }

        const cachedState = getJson(localStorageKey);

        if (cachedState) {
            setState(cachedState);
        }
    });

    const saveStateToLocalStorage = useCallback(
        (state: T) => {
            if (!localStorageKey) {
                return;
            }
            setJson(localStorageKey, state);
        },
        [localStorageKey]
    );

    const patch = useCallback(
        (change: T) => {
            const newState = {
                ...state,
                ...change,
            };

            setState(newState);
            saveStateToLocalStorage(newState);
        },
        [state, saveStateToLocalStorage]
    );

    const set = useCallback(
        (newState: T) => {
            setState(newState);
            saveStateToLocalStorage(newState);
        },
        [setState, saveStateToLocalStorage]
    );

    return [state, patch, { set }];
}
