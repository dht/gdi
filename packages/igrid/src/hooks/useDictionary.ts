import { useCallback } from 'react';
import { usePatchState } from './usePatchState';

type ChangeMethod<T> = (id: string, item: T) => void;
type RemoveMethod = (id: string) => void;

export type Verbs<T> = {
    add: ChangeMethod<T>;
    patch: ChangeMethod<T>;
    set: ChangeMethod<T>;
    remove: RemoveMethod;
};

type UseDictionaryReturn<T> = [Record<string, T>, Verbs<T>];

export function useDictionary<T>(
    initialValue: Record<string, T> = {},
    localStorageKey?: string
): UseDictionaryReturn<T> {
    const [state, patchState, { set }] = usePatchState<Record<string, T>>(
        initialValue,
        localStorageKey
    );

    const _set = useCallback(
        (id: string, item: T) => {
            const nextState = {
                [id]: item,
            };
            patchState(nextState);
        },
        [patchState]
    );

    const _add = _set;

    const _patch = useCallback(
        (id: string, item: Partial<T>) => {
            const nextState = {
                [id]: {
                    ...state[id],
                    ...item,
                },
            };
            patchState(nextState);
        },
        [state, patchState]
    );

    const _remove = useCallback(
        (id: string) => {
            const nextState = { ...state };
            delete nextState[id];
            set(nextState);
        },
        [state, set]
    );

    return [
        state,
        {
            add: _add,
            patch: _patch,
            set: _set,
            remove: _remove,
        },
    ];
}
