import React from 'react';
import { useWhatChanged } from './useWhatChanged';

type DependencyList = ReadonlyArray<unknown>;

export function useCallback<T extends Function>(
    callback: T,
    deps: DependencyList,
    logId?: string
): T {
    useWhatChanged(deps, logId);
    return React.useCallback(callback, deps);
}
