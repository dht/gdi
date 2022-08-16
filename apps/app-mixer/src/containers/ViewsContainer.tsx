import React, { useCallback } from 'react';
import Mixer from '../components/Mixer/Mixer';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import Views from '../components/Views/Views';
import type { IViewMode } from '@gdi/store-mixer';

export const ViewsContainer = () => {
    const dispatch = useDispatch();
    const mode = useSelector(selectors.raw.$rawMixerState).mode;

    const onChange = useCallback(
        (mode: IViewMode) => {
            console.log('mode ->', mode);

            dispatch(actions.appStateMixer.patch({ mode }));
        },
        [mode]
    );

    return <Views mode={mode} onChange={onChange} />;
};
