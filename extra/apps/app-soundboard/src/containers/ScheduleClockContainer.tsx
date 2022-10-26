import React, { useCallback, useMemo } from 'react';
import { actions } from '../store';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleClock from '../components/ScheduleClock/ScheduleClock';

export const ScheduleClockContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawSchedulerState);
    const now = useSelector(selectors.raw.$now);

    const changeDelta = useCallback((timeDeltaInMinutes: number) => {
        dispatch(
            actions.appStateScheduler.patch({
                timeDeltaInMinutes,
            })
        );
    }, []);

    return (
        <ScheduleClock
            changeDelta={changeDelta}
            delta={appState.timeDeltaInMinutes}
        />
    );
};
