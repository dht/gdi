import React from 'react';
import Mini from '../components/Mini/Mini';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const MiniContainer = () => {
    const appState = useSelector(selectors.raw.$rawSoundboardState);
    const projectsSoundboard = useSelector(selectors.base.$projectsSoundboard);
    const { dailyHours } = appState;

    return <Mini projects={projectsSoundboard} dailyHours={dailyHours} />;
};
