import React, { DependencyList } from 'react';
import { delta } from '../utils/time';

export function useWhatChanged(
    deps: DependencyList | undefined,
    logId?: string
) {
    const prevDeps = React.useRef<DependencyList | undefined>(undefined);

    React.useEffect(() => {
        if (!logId) {
            return;
        }

        const parts = logId.split('|');
        const hookId = parts[0];
        const params = parts[1].split(',');

        if (prevDeps.current) {
            (deps ?? []).forEach((dep, i) => {
                if (dep !== prevDeps.current?.[i]) {
                    const variableName = params[i];
                    console.log([delta(), hookId, variableName].join(' '));
                    // console.log(prevDeps.current?.[i], dep);
                }
            });
        }
        prevDeps.current = deps;
    });
}
