import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import Views from '../components/Views/Views';
import type { IViewMode } from '@gdi/store-mixer';

export const ViewsContainer = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectors.raw.$rawMixerState).mode;

    const onChange = useCallback(
        (mode: IViewMode) => {
            dispatch(actions.appStateMixer.patch({ mode }));
        },
        [mode]
    );

    return <Views mode={mode} onChange={onChange} />;
};
