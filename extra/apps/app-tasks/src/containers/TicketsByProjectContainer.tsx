import React from 'react';
import TicketsByProject from '../components/TicketsByProject/TicketsByProject';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const TicketsByProjectContainer = () => {
    return <TicketsByProject />;
};
