import { useMemo } from 'react';
import { useStore } from 'react-redux';
import { useCounter, useInterval } from 'react-use';

const DEFAULT_INTERVAL = 300;

export function useSelectorInterval<TState = any, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    interval: number = DEFAULT_INTERVAL,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
    const store = useStore();
    const [counter, { inc }] = useCounter(0);

    useInterval(inc, interval);

    const data = useMemo(() => {
        const state = store.getState();
        return selector(state as any);
    }, [counter, equalityFn]);

    return data;
}
