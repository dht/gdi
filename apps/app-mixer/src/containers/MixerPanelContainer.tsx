import React, { useCallback } from 'react';
import { actions, selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { MixerPanel } from '../components/MixerPanel/MixerPanel';

export const MixerPanelContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawMixerState);

    const onHeaderAction = useCallback(
        (panelKey: string, actionId: string) => {
            if (panelKey === 'Library' && actionId === 'view') {
                const nextToolId =
                    appState.selectedToolId === 'data' ? 'browse' : 'data';
                dispatch(
                    actions.appStateMixer.patch({
                        selectedToolId: nextToolId,
                    })
                );
            }
        },
        [appState.selectedToolId]
    );

    return <MixerPanel onHeaderAction={onHeaderAction} />;
};
