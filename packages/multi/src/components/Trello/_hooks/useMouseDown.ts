import React, { RefObject, useCallback, useState } from 'react';
import { useListener } from './useListener';
import { Point } from './useMouseMove';

type Fn = () => void;

export function useMouseDown(
    ref: RefObject<HTMLDivElement>,
    onMouseDownCallback?: Fn,
    onMouseUpCallback?: Fn
): boolean {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const onMouseDown = useCallback(
        (_ev: React.MouseEvent) => {
            setIsMouseDown(true);

            if (onMouseDownCallback) {
                onMouseDownCallback();
            }
        },
        [onMouseDownCallback]
    );

    const onMouseUp = useCallback(
        (_ev: React.MouseEvent) => {
            setIsMouseDown(false);

            if (onMouseUpCallback) {
                onMouseUpCallback();
            }
        },
        [onMouseUpCallback]
    );

    useListener('mousedown', ref, onMouseDown);
    useListener('mouseup', ref, onMouseUp);

    return isMouseDown;
}

export function useMouseDownWithPosition(
    ref: RefObject<HTMLDivElement>,
    onMouseDownCallback?: Fn,
    onMouseUpCallback?: Fn
): [boolean, Point | undefined] {
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [position, setPosition] = useState<Point | undefined>({ x: 0, y: 0 });

    const onMouseDown = useCallback(
        (ev: React.MouseEvent) => {
            setIsMouseDown(true);
            setPosition({ x: ev.clientX, y: ev.clientY });

            if (onMouseDownCallback) {
                onMouseDownCallback();
            }
        },
        [onMouseDownCallback]
    );

    const onMouseUp = useCallback(
        (_ev: React.MouseEvent) => {
            setIsMouseDown(false);
            setPosition(undefined);

            if (onMouseUpCallback) {
                onMouseUpCallback();
            }
        },
        [onMouseUpCallback]
    );

    useListener('mousedown', ref, onMouseDown);
    useListener('mouseup', ref, onMouseUp);

    return [isMouseDown, position];
}
