import { useCallback } from 'react';
import { IKeyboardEvent, useKey } from './useKey';

export type IShortKey = {
    id?: string;
    key: string;
    metaKey?: boolean;
    ctrlKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
};

type CallbackWithId = (id: string) => void;

export function useShortKeys(
    shortKeys: IShortKey[] = [],
    callback: CallbackWithId,
    depArray: any[] = []
) {
    const onKey = useCallback((event: IKeyboardEvent) => {
        const matchingShortKey = shortKeys.find((shortKey) =>
            isMatching(event, shortKey)
        );

        if (matchingShortKey && callback) {
            callback(matchingShortKey.id || '');
        }
    }, depArray);

    useKey(onKey);
}

export function useShortKey(
    shortKey?: IShortKey,
    callback?: CallbackWithId,
    depArray: any[] = []
) {
    const onKey = useCallback((event: IKeyboardEvent) => {
        if (shortKey && isMatching(event, shortKey) && callback) {
            callback(shortKey.id || '');
        }
    }, depArray);

    useKey(onKey, {}, depArray);
}

const isMatching = (event: IKeyboardEvent, shortKey: IShortKey) => {
    return (
        event.key === shortKey.key &&
        compare(event.altKey, shortKey.altKey) &&
        compare(event.ctrlKey, shortKey.ctrlKey) &&
        compare(event.metaKey, shortKey.metaKey) &&
        compare(event.shiftKey, shortKey.shiftKey)
    );
};

const compare = (a: boolean | undefined, b: boolean | undefined) => {
    return (
        a == b ||
        (typeof a === 'undefined' && b === false) ||
        (a === false && typeof b === 'undefined')
    );
};
