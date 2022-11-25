import React, { useCallback, useMemo } from 'react';
import Switcher from '../components/Switcher/Switcher';
import { actions } from '../store';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const options = [
    {
        id: 'day',
        label: 'Day',
    },
    {
        id: 'evening',
        label: 'Evening',
    },
];

export const SwitcherContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawSchedulerState);

    const value = appState.isDayTime ? 'day' : 'evening';

    const onChange = useCallback((option: IOption) => {
        dispatch(
            actions.appStateScheduler.patch({
                isDayTime: option.id === 'day',
            })
        );
    }, []);

    return <Switcher value={value} options={options} onChange={onChange} />;
};
