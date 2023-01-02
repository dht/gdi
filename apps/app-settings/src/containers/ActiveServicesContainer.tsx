import React, { useContext } from 'react';
import ActiveServices from '../components/ActiveServices/ActiveServices';
import { useSelector } from 'react-redux';
import { selectors } from '../selectors';
import { PlatformContext } from '@gdi/platformer';

export const ActiveServicesContainer = () => {
    const me = useSelector(selectors.raw.$rawMe);
    const users = useSelector(selectors.base.$users);
    const activeServices = useSelector(selectors.base.$activeServices);
    const activeServicesStats = useSelector(
        selectors.base.$activeServicesStats
    );

    const templatesMeta = useContext(PlatformContext).state.templatesMeta;

    return (
        <ActiveServices
            me={me}
            users={users}
            activeServices={activeServices}
            stats={activeServicesStats}
            templatesMeta={templatesMeta}
        />
    );
};

export default ActiveServicesContainer;
