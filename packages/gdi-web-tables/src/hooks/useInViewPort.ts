import { useEffect, RefObject } from 'react';

export function useInViewPort(
    ref: RefObject<HTMLDivElement>,
    selector: string,
    oneWay: boolean = false,
    depArray: any[] = []
) {
    useEffect(() => {
        const inViewport = (entries: any[]) => {
            entries.forEach((entry: any) => {
                if (!entry.isIntersecting && oneWay) {
                    return;
                }
                entry.target.classList.toggle('visible', entry.isIntersecting); // prettier-ignore
            });
        };

        const obs = new IntersectionObserver(inViewport);

        setTimeout(() => {
            if (!ref.current) {
                return;
            }
            const elements = ref.current.querySelectorAll(selector);

            elements.forEach((el) => {
                obs.observe(el);
            });
        }, 500);

        return () => {
            obs.disconnect();
        };
    }, [selector, ref.current, ...depArray]);
}
