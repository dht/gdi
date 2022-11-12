import React, { DependencyList, useEffect } from 'react';
import { useWhatChanged } from './useWhatChanged';

export function useMemo<T>(
    factory: () => T,
    deps: DependencyList | undefined,
    logId?: string
): T {
    useWhatChanged(deps, logId);
    return React.useMemo(factory, deps);
}
