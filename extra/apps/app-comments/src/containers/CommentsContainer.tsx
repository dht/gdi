import React, { useMemo } from 'react';
import Comments from '../components/Comments/Comments';
import { selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { invokeEvent } from 'shared-base';

export const CommentsContainer = () => {
    const dispatch = useDispatch();
    const comments = useSelector(selectors.tables.$comments);
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
        <Comments
            data={comments}
            callbacks={callbacks}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};
