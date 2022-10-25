import React, { useMemo } from 'react';
import { selectors } from '../store';
import Pages from '../components/Pages/Pages';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const PagesContainer = () => {
    const dispatch = useDispatch();

    const pages = useSelector(selectors.tables.$libraryPages);
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
        <Pages
            data={pages}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};
