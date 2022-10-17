import React from 'react';
import ActiveApps from '../components/ActiveApps/ActiveApps';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const ActiveAppsContainer = () => {
    const me = useSelector(selectors.raw.$rawMe);
    const users = useSelector(selectors.base.$users);
    const activeApps = useSelector(selectors.base.$activeApps);
    const activeAppsStats = useSelector(selectors.base.$activeAppsStats);

    return (
        <ActiveApps
            me={me}
            users={users}
            activeApps={activeApps}
            stats={activeAppsStats}
        />
    );
};
