import { useEffect } from 'react';

export type Callback = (event: IShortKey) => void;

export type UseKeyOptions = {
    filterKeys?: string[];
};

export function useKey(
    callback: Callback,
    options: UseKeyOptions = {},
    depArray: any[] = []
) {
    const { filterKeys = [] } = options;

    useEffect(() => {
        const onKeyDown = (ev: KeyboardEvent) => {
            const { altKey, ctrlKey, shiftKey, metaKey, key } = ev;

            if (filterKeys.length > 0 && !filterKeys.includes(key)) {
                return;
            }

            const event: IShortKey = {
                key,
                withAlt: altKey,
                withCommand: metaKey,
                withCtrl: ctrlKey,
                withShift: shiftKey,
            };

            callback(event);
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, depArray);
}
