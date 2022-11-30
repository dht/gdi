import React, { useMemo } from 'react';
import Things from '../components/Things/Things';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { invokeEvent } from 'shared-base';

export const ThingsContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectors.tables.$things);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
        }),
        []
    );

    return (
        <Things
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default ThingsContainer;
