import React, { useMemo } from 'react';
import { selectors } from '../../store';
import LiveTask from '../../components/LiveTask/LiveTask';
import ScanToStart from './ScanToStartContainer';
import { useDispatch } from 'react-redux';
import { useSelectorInterval } from '../../hooks/useSelectorInterval';

export const LiveTaskContainer = () => {
    const dispatch = useDispatch();
    const activeTask = useSelectorInterval(
        selectors.base.$activeTaskNonMemoized
    );

    const callbacks = useMemo(
        () => ({
            onSync: () => {
                dispatch({
                    type: 'BLKR_JIRA_SYNC',
                });
            },
        }),
        [dispatch]
    );

    if (!activeTask.isLoaded) {
        return <ScanToStart />;
    }

    return <LiveTask callbacks={callbacks} activeTask={activeTask} />;
};
