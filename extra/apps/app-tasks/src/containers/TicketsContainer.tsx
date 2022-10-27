import React, { useMemo } from 'react';
import Tickets from '../components/Tickets/Tickets';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { invokeEvent } from 'shared-base';
import { HoustonContainer } from './HoustonContainer';

export const TicketsContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectors.tables.$tickets);
    const allOptions = useSelector(selectors.options.$allOptions);
    const projectKey = useSelector(selectors.base.$projectKey);

    const newDataExtra = useMemo(() => {
        if (projectKey === 'ALL') {
            return {};
        } else {
            return {
                projectKey,
            };
        }
    }, [projectKey]);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {},
        }),
        []
    );

    return (
        <Tickets
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
            customView={HoustonContainer}
            newDataExtra={newDataExtra}
        />
    );
};
