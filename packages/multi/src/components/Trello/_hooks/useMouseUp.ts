import React, { useEffect } from 'react';

type Callback = (ev: any) => void;

export function useMouseUp(
    on: boolean,
    callback: Callback,
    depArr: any[] = []
) {
    useEffect(() => {
        const onMouseUp = (ev: any) => {
            callback(ev);
        };

        if (!on) {
            document.removeEventListener('mouseup', onMouseUp);
            return;
        }

        document.addEventListener('mouseup', onMouseUp);

        return () => {
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [on, ...depArr]);
}
