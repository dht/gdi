import React, { useMemo } from 'react';
import Campaigns from '../components/Campaigns/Campaigns';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const CampaignsContainer = () => {
    const dispatch = useDispatch();
    const campaigns = useSelector(selectors.tables.$campaigns);
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
        <Campaigns
            data={campaigns}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};
