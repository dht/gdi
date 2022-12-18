import React from 'react';
import OverviewNavigate from '../components/OverviewNavigate/OverviewNavigate';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const OverviewNavigateContainer = () => {
    const inboxMessage = useSelector(selectors.base.$inboxMessage);

    return <OverviewNavigate inboxMessage={inboxMessage} />;
};

export default OverviewNavigateContainer;
