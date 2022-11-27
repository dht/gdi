import React from 'react';
import TicketsRecent from '../../components/TicketsRecent/TicketsRecent';
import { useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { useCallbacks } from '../../hooks/useCallbacks';

export const TicketsRecentContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useCallbacks({
        clearRecentSessions: () => {
            dispatch(actions.recentSessions.setAll({}));
        },
    });

    const selector = selectors.base.$recentSessions;

    return <TicketsRecent selector={selector} callbacks={callbacks} />;
};

export default TicketsRecentContainer;
