import { useMemo } from 'react';

export function useCallbacks<T>(callbacks: T) {
    return useMemo(() => callbacks, []);
}
