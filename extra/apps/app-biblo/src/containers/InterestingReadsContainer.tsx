import React, { useMemo } from 'react';
import InterestingReads from '../components/InterestingReads/InterestingReads';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { invokeEvent } from 'shared-base';

export const InterestingReadsContainer = () => {
    const dispatch = useDispatch();
    const reads = useSelector(selectors.tables.$interestingReads);
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
        <InterestingReads
            data={reads}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};
