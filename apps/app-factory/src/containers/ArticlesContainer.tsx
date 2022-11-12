import React, { useMemo } from 'react';
import { selectors } from '../store';
import { Articles } from '../components/Articles/Articles';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const ArticlesContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectors.tables.$articles);
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
        <Articles
            data={articles}
            callbacks={callbacks}
            allOptions={allOptions}
            tags={allOptions.$articleTags}
            dispatch={dispatch}
        />
    );
};
