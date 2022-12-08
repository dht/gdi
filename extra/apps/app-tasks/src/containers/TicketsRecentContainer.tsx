import React, { useMemo } from 'react';
import TicketsRecent from '../components/TicketsRecent/TicketsRecent';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const TicketsRecentContainer = () => {
    const callbacks = useMemo(
        () => ({
            clearRecentSessions: () => {},
        }),
        []
    );

    return (
        <TicketsRecent
            selector={selectors.tables.$tickets}
            callbacks={callbacks}
        />
    );
};

export default TicketsRecentContainer;
