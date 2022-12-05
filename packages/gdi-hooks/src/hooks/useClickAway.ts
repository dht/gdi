import { RefObject, useEffect } from 'react';

export function useClickAway(
    ref: RefObject<HTMLDivElement>,
    callback: (ev: any) => void,
    devArray: any[] = []
) {
    useEffect(() => {
        function isInRef(element: EventTarget) {
            let output = false;

            let cursor: ParentNode | null = element as ParentNode;

            while (cursor) {
                cursor = cursor.parentNode;
                if (cursor === ref.current) {
                    output = true;
                }
            }

            return output;
        }

        function onClick(ev: any) {
            if (!isInRef(ev.target)) {
                callback(ev);
            }
        }

        document.addEventListener('click', onClick);

        return () => {
            document.removeEventListener('click', onClick);
        };
    }, [...devArray]);
}
