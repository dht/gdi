import React, { useCallback, useMemo } from 'react';
import Library from '../components/Library/Library';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const LibraryContainer = () => {
    const dispatch = useDispatch();
    const instance = useSelector(selectors.base.$content);

    const callbacks = useMemo(
        () => ({
            onSave: (data: Json) => {
                console.log('data ->', data);
                return Promise.resolve(true);
            },
        }),
        []
    );

    if (!instance) {
        // return null;
    }

    return <Library instance={instance} callbacks={callbacks} />;
};
