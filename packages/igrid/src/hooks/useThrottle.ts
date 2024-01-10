import { useDelta } from './useDelta';

type Fn = (...arg: any) => void;

export function useThrottle(method: Fn, minDelay: number): Fn {
    const [{ delta, reset }] = useDelta();

    return (...args: any) => {
        if (delta() < minDelay) {
            return;
        }

        method(...args);
        reset();
    };
}
