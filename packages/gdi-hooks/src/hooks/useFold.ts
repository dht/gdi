import React, { useEffect, useRef, useState } from 'react';
import { useMount, useSetState } from 'react-use';

export function useFold(show: boolean) {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    let [style, patchStyle] = useSetState<React.CSSProperties>({
        opacity: 0,
        // pointerEvents: 'none',
        transition: 'height 100ms ease-out',
        overflow: 'hidden',
    });

    useMount(() => {
        const box = ref.current?.getBoundingClientRect() ?? { height: 0 };
        setHeight(box.height);
    });

    useEffect(() => {
        patchStyle({
            height: 0,
            opacity: 1,
        });
    }, [height]);

    useEffect(() => {
        const duration = show ? 200 : 150;

        patchStyle({
            // pointerEvents: show ? 'auto' : 'none',
            height: show ? height + 'px' : 0,
            transition: `height ${duration}ms ease-out`,
        });
    }, [show]);

    return [ref, style];
}
