import React from 'react';
import TicketsRecent from '../components/TicketsRecent/TicketsRecent';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const TicketsRecentContainer = () => {
    return <TicketsRecent />;
};

export default TicketsRecentContainer;
