import React, { useMemo } from 'react';
import Leads from '../components/Leads/Leads';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const LeadsContainer = () => {
    const dispatch = useDispatch();
    const leads = useSelector(selectors.tables.$leads);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                console.log('ids ->', ids);
            },
        }),
        []
    );

    return (
        <Leads
            data={leads}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};
