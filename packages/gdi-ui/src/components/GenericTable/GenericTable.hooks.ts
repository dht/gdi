import { RefObject, useState } from 'react';
import { useMount } from 'react-use';

export function useBoundingClientRect(ref: RefObject<HTMLDivElement>) {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    useMount(() => {
        if (!ref.current) {
            return;
        }
        const parent = ref.current.parentNode as HTMLDivElement;
        if (!parent) {
            return;
        }
        const box = parent.getBoundingClientRect();
        setWidth(box.width);
        setHeight(box.height);
    });

    return { width, height };
}
