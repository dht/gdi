import { useCallback, useEffect } from 'react';
import { useKey } from './useKey';

type CallbackWithId = (id: string) => void;

export function useShortKeys(
    shortKeys: IShortKey[] = [],
    callback: CallbackWithId,
    depArray: any[] = []
) {
    const onKey = useCallback((event: IShortKey) => {
        const matchingShortKey = shortKeys.find((shortKey) =>
            isMatching(event, shortKey)
        );

        if (matchingShortKey && callback) {
            callback(matchingShortKey.id ?? '');
        }
    }, depArray);

    useKey(onKey);
}

export function useShortKey(
    shortKey?: IShortKey,
    callback?: CallbackWithId,
    depArray: any[] = []
) {
    const onKey = useCallback((event: IShortKey) => {
        if (shortKey && isMatching(event, shortKey) && callback) {
            callback(shortKey.id ?? '');
        }
    }, depArray);

    useKey(onKey, {}, depArray);
}

export function useShortKeyDownUp(
    shortKey: IShortKey,
    callbackDown: CallbackWithId,
    callbackUp: CallbackWithId,
    depArray: any[] = []
) {
    useEffect(() => {
        const onKeyDown = (ev: KeyboardEvent) => {
            if (isMatching(ev, shortKey)) {
                callbackDown(shortKey.id ?? '');
            }
        };

        const onKeyUp = (ev: KeyboardEvent) => {
            if (isMatching(ev, shortKey)) {
                callbackUp(shortKey.id ?? '');
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, depArray);
}

const isMatching = (event: IShortKey, shortKey: IShortKey) => {
    return (
        event.key === shortKey.key &&
        compare(event.withAlt, shortKey.withAlt) &&
        compare(event.withCtrl, shortKey.withCtrl) &&
        compare(event.withCommand, shortKey.withCommand) &&
        compare(event.withShift, shortKey.withShift)
    );
};

const compare = (a: boolean | undefined, b: boolean | undefined) => {
    return (
        a == b ||
        (typeof a === 'undefined' && b === false) ||
        (a === false && typeof b === 'undefined')
    );
};
