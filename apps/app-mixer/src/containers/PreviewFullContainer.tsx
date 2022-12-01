import React, { useCallback } from 'react';
import { PreviewFull } from '../components/PreviewFull/PreviewFull';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../store';

export const PreviewFullContainer = () => {
    const dispatch = useDispatch();
    const elements = useSelector(selectors.base.$instancesForCurrentPage);
    const datasets = useSelector(selectors.raw.$rawLibraryDatasets);
    const widget = useSelector(selectors.base.$widgetForCurrentZoomBuild);
    const mobileMode = useSelector(selectors.raw.$rawMixerState).mobileMode;

    const onToggleMobile = useCallback((value: boolean) => {
        dispatch(
            actions.appStateMixer.patch({
                mobileMode: value,
            })
        );
    }, []);

    return (
        <PreviewFull
            elements={elements}
            widget={widget}
            datasets={datasets}
            mobileMode={mobileMode}
            onToggleMobile={onToggleMobile}
        />
    );
};

export default PreviewFullContainer;
