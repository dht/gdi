import { useEffect } from 'react';

export type IKeyboardEvent = {
    key: string;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
    metaKey: boolean;
};

export type Callback = (event: IKeyboardEvent) => void;

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

            callback({ altKey, ctrlKey, shiftKey, metaKey, key });
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, depArray);
}
