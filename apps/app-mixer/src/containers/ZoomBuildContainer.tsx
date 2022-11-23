import React, { useCallback } from 'react';
import ZoomBuild from '../components/ZoomBuild/ZoomBuild';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const ZoomBuildContainer = () => {
    const dispatch = useDispatch();
    const elements = useSelector(selectors.base.$instancesForCurrentZoomBuild);
    const widget = useSelector(selectors.base.$widgetForCurrentZoomBuild);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);
    const mobileMode = useSelector(selectors.raw.$rawMixerState).mobileMode;

    const onToggleMobile = useCallback((value: boolean) => {
        dispatch(
            actions.appStateMixer.patch({
                mobileMode: value,
            })
        );
    }, []);

    return (
        <ZoomBuild
            elements={elements}
            widget={widget}
            datasets={datasets}
            mobileMode={mobileMode}
            onToggleMobile={onToggleMobile}
        />
    );
};
