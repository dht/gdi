import { useEffect } from 'react';

export type IEvent = IShortKey & {
    ev: KeyboardEvent;
};

export type Callback = (event: IEvent) => void;

export type UseKeyOptions = {
    filterKeys?: string[];
    filterRegex?: RegExp;
    preventFocusSteal?: boolean;
};

export function useKey(
    callback: Callback,
    options: UseKeyOptions = {},
    depArray: any[] = []
) {
    const { filterKeys = [], filterRegex, preventFocusSteal } = options;

    useEffect(() => {
        const onKeyDown = (ev: KeyboardEvent) => {
            const { altKey, ctrlKey, shiftKey, metaKey, key } = ev;

            if (preventFocusSteal) {
                const tagName = document.activeElement?.tagName;

                if (tagName === 'INPUT') {
                    return;
                }
            }

            if (filterKeys.length > 0 && !filterKeys.includes(key)) {
                return;
            }

            if (filterRegex) {
                if (!ev.key.match(filterRegex)) {
                    return;
                }

                if (key.length > 1) {
                    return;
                }

                if (ev.altKey || ev.metaKey || ev.ctrlKey) {
                    return;
                }
            }

            const event: IEvent = {
                key,
                withAlt: altKey,
                withCommand: metaKey,
                withCtrl: ctrlKey,
                withShift: shiftKey,
                ev,
            };

            callback(event);
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, depArray);
}
