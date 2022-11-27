import React from 'react';
import Houston from '../components/Houston/Houston';
import { LiveTaskContainer } from './singles/LiveTaskContainer';
import { PlaybackContainer } from './singles/PlaybackContainer';
import { TicketsByProjectContainer } from './singles/TicketsByProjectContainer';
import { TicketsRecentContainer } from './singles/TicketsRecentContainer';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const HoustonContainer = () => {
    return (
        <Houston>
            <LiveTaskContainer />
            <PlaybackContainer />
            <TicketsByProjectContainer />
            <TicketsRecentContainer />
        </Houston>
    );
};

export default HoustonContainer;
