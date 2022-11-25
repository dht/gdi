import React, { useCallback, useMemo } from 'react';
import { actions, selectors } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { MixerPanel } from '../components/MixerPanel/MixerPanel';

export const MixerPanelContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawMixerState);

    const callbacks = useMemo(
        () => ({
            onLibraryChange: (optionId: string) => {
                dispatch(
                    actions.appStateMixer.patch({
                        panelLibraryFlavour: optionId,
                    })
                );
            },
        }),
        []
    );

    return (
        <MixerPanel
            panelLibraryFlavour={appState.panelLibraryFlavour}
            callbacks={callbacks}
        />
    );
};
