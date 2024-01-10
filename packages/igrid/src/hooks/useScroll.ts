import { RefObject, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { throttle } from 'shared-base';

export function useScroll(
    id: string,
    ref: RefObject<HTMLDivElement> | null,
    smoothScrollingClass?: string
) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [sy, setSy] = useLocalStorage(`SCROLL_POSITION_${id}`, 0);

    useEffect(() => {
        if (!ref || !ref.current) {
            return;
        }

        const instance: any = ref ? findInstance(ref.current) : document;

        if (!instance) {
            return;
        }

        const onScroll = throttle(() => {
            if (!ref) {
                setX(window.pageXOffset);
                setY(window.pageYOffset);
                setSy(window.pageYOffset);
            } else {
                setX(instance.scrollLeft);
                setY(instance.scrollTop);
                setSy(instance.scrollTop);
            }
        }, 100);

        instance.addEventListener('scroll', onScroll);

        return () => {
            instance.removeEventListener('scroll', onScroll);
        };
    }, []);

    const reposition = () => {
        if (!ref || !ref.current) {
            return;
        }

        const instance: any = ref ? findInstance(ref.current) : document.body;

        if (!instance) {
            return;
        }

        if (smoothScrollingClass) {
            const body = document.querySelector('body');
            if (!body) {
                return;
            }

            body.classList.remove(smoothScrollingClass);
            instance.scrollTop = sy;
            body.classList.add(smoothScrollingClass);
        } else {
            instance.scrollTop = sy;
        }
    };

    return { x, y, reposition };
}

const findInstance = (domElement: HTMLDivElement) => {
    let runs = 0,
        cursor: any = domElement,
        output: HTMLDivElement | null = null;

    do {
        cursor = cursor.parentNode;

        if (
            cursor &&
            cursor.classList &&
            cursor.classList.contains('Instance-container')
        ) {
            output = cursor.querySelector('.content');
        }
    } while (cursor && runs++ < 10);

    return output;
};
