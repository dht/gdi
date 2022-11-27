import React from 'react';
import Schedule from '../components/Schedule/Schedule';
import { useSelector } from 'react-redux';
import { selectorsSoundboard } from '../selectors';

export const ScheduleContainer = () => {
    const scheduleSessions = useSelector(selectorsSoundboard.base.$agenda);
    return <Schedule items={scheduleSessions} />;
};

export default ScheduleContainer;
