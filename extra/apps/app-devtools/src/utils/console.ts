import { useCustomEvent } from '@gdi/hooks';
import { useCallback, useEffect, useRef } from 'react';
import { useList } from 'react-use';
import { guid4, invokeEvent } from 'shared-base';
import { ILogEvent, ILogEventDetail, LogMethod } from '../types';

let isHijacked = false;

let originalConsole: any = window.console;

type Callback = (event: ILogEventDetail) => void;

export const hijackConsole = (callback: Callback): Console => {
    if (isHijacked) {
        return originalConsole;
    }

    const consoleMethods: LogMethod[] = [
        'log',
        'info',
        'warn',
        'error',
        'time',
        'timeEnd',
        'debug',
    ];
    const hijackedConsole: any = {};

    consoleMethods.forEach((method) => {
        hijackedConsole[method] = (...args: any[]) => {
            const detail: ILogEventDetail = {
                method,
                args,
            };

            callback(detail);
        };
    });

    window.console = hijackedConsole;
    isHijacked = true;

    return originalConsole;
};

export const unHijackConsole = (): Console => {
    if (!isHijacked) {
        return originalConsole;
    }

    window.console = originalConsole;
    isHijacked = false;
    return originalConsole;
};

let index = 0;

const newLog = (logType: LogMethod, args: any[], scope?: string): ILogEvent => {
    return {
        id: guid4(),
        index: index++,
        ts: Date.now(),
        logType,
        args,
        scope,
        tsEnd: 0,
    };
};

export function useHijackConsole(callback: Callback) {
    const ref = useRef<Console>();

    useEffect(() => {
        ref.current = hijackConsole(callback);

        return () => {
            unHijackConsole();
        };
    }, []);

    return ref.current as Console;
}

export function useLogs() {
    const [logs, { push }] = useList<ILogEvent>([]);

    useHijackConsole((event: ILogEventDetail) => {
        const { method, args } = event;
        const log = newLog(method, args);
        push(log);
    });

    return logs;
}
