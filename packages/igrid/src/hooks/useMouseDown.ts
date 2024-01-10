import { RefObject, useState } from 'react';
import { useListener } from './useListener';

type Fn = () => void;

export function useIsMouseDown(
    ref: RefObject<HTMLDivElement>,
    onMouseDownCallback?: Fn,
    onMouseUpCallback?: Fn
): boolean {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    function onMouseDown() {
        setIsMouseDown(true);

        if (onMouseDownCallback) {
            onMouseDownCallback();
        }
    }

    function onMouseUp() {
        setIsMouseDown(false);

        if (onMouseUpCallback) {
            onMouseUpCallback();
        }
    }

    useListener('mousedown', ref, onMouseDown);
    useListener('mouseup', ref, onMouseUp);

    return isMouseDown;
}
