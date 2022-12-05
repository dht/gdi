import React from 'react';
import Schedule from '../components/Schedule/Schedule';
import { useSelector } from 'react-redux';
import { selectors } from '../selectors';

export const ScheduleContainer = () => {
    const scheduleSessions = [
        {
            time: '11:00',
            title: 'Welcome',
        },
        {
            time: '11:15',
            title: 'Introduction',
        },
        {
            time: '11:30',
            title: 'Break',
        },
        {
            time: '15:45',
            title: 'Zoom Session',
        },
        {
            time: '16:45',
            title: 'Yoga',
        },
    ] as any;

    return <Schedule items={scheduleSessions as any} />;
};

export default ScheduleContainer;
