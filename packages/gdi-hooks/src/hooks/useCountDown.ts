import { useEffect, useMemo, useRef, useState } from 'react';
import { useMount, useTimeout, useToggle, useUnmount } from 'react-use';
import { ts } from 'shared-base';

type Return = [
    isReady: boolean,
    isRunning: boolean,
    callbacks: {
        cancel: () => void;
        reset: () => void;
    }
];

export function useCountDown(duration: number): Return {
    const timerMain = useRef<number>();
    const timerIsRunning = useRef<number>();

    const [isReady, setIsReady] = useToggle(false);
    const [isRunning, setIsRunning] = useToggle(false);
    const [start, setStart] = useState(ts());

    const clearTimers = () => {
        clearTimeout(timerMain.current);
        clearTimeout(timerIsRunning.current);
    };

    const reset = () => {
        clearTimers();
        setIsRunning(false);
        setIsReady(false);

        timerIsRunning.current = setTimeout(() => {
            setStart(ts());
        }, 100);
    };

    const cancel = () => {
        clearTimers();
        setIsRunning(false);
    };

    useUnmount(() => {
        clearTimers();
    });

    useEffect(() => {
        clearTimers();
        setIsRunning(true);

        timerMain.current = setTimeout(() => {
            setIsReady(true);
            clearTimers();
        }, duration);

        return () => {
            clearTimers();
        };
    }, [start]);

    return [
        isReady,
        isRunning,
        {
            cancel,
            reset,
        },
    ];
}
