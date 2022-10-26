import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../store';
import { SoundboardContextProvider } from '../context/SoundboardContext';
import ScheduleTable from '../components/ScheduleTable/ScheduleTable';

export const ScheduleTableContainer = () => {
    const dispatch = useDispatch();
    const scheduleBlocks = useSelector(selectors.base.$scheduleBlocks);
    const scheduleSessions = useSelector(selectors.base.$scheduleSessions);
    const appState = useSelector(selectors.raw.$rawSchedulerState);
    const currentDayAndTime = useSelector(selectors.base.$currentDayAndTime);

    const onClick = useCallback((day: number, time: string) => {
        dispatch(
            actions.appStateScheduler.patch({
                day,
                time,
            })
        );
    }, []);

    const onMove = useCallback((key: string) => {
        dispatch({ type: 'SCHEDULE_TABLE_MOVE', key });
    }, []);

    const onClear = useCallback(() => {
        dispatch({ type: 'SCHEDULE_DETACH_TICKET_FROM_BLOCK' });
    }, []);

    return (
        <SoundboardContextProvider>
            <ScheduleTable
                isDayTime={appState.isDayTime}
                currentDayAndTime={currentDayAndTime}
                scheduleSessions={scheduleSessions}
                scheduleBlocks={scheduleBlocks}
                onClick={onClick}
                onMove={onMove}
                onClear={onClear}
            />
        </SoundboardContextProvider>
    );
};
