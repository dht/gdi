import React, { useContext } from 'react';
import ActiveApps from '../components/ActiveApps/ActiveApps';
import { useSelector } from 'react-redux';
import { selectors } from '../selectors';
import { PlatformContext } from '@gdi/platformer';

export const ActiveAppsContainer = () => {
    const me = useSelector(selectors.raw.$rawMe);
    const users = useSelector(selectors.base.$users);
    const activeApps = useSelector(selectors.base.$activeApps);
    const activeAppsStats = useSelector(selectors.base.$activeAppsStats);

    const templatesMeta = useContext(PlatformContext).state.templatesMeta;

    return (
        <ActiveApps
            me={me}
            users={users}
            activeApps={activeApps}
            stats={activeAppsStats}
            templatesMeta={templatesMeta}
        />
    );
};

export default ActiveAppsContainer;
