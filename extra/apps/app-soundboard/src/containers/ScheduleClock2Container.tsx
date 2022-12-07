import React, { useCallback } from 'react';
import ScheduleClock2 from '../components/ScheduleClock2/ScheduleClock2';
import { actions } from '../store';
import { selectors } from '../selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ScheduleClock2Container = () => {
    const dispatch = useDispatch();
    const time = useSelector(selectors.raw.$now);
    const weather = {} as any;

    const changeDelta = useCallback((timeDeltaInMinutes: number) => {
        dispatch(
            actions.appStateScheduler.patch({
                timeDeltaInMinutes,
            })
        );
    }, []);

    return (
        <ScheduleClock2
            weather={weather}
            time={time as any}
            changeDelta={changeDelta}
        />
    );
};

export default ScheduleClock2Container;
