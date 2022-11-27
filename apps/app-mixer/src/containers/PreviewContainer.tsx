import React, { useCallback } from 'react';
import { ZoomPreview } from '../components/ZoomPreview/ZoomPreview';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../store';

export const PreviewContainer = () => {
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
        <ZoomPreview
            elements={elements}
            widget={widget}
            datasets={datasets}
            mobileMode={mobileMode}
            onToggleMobile={onToggleMobile}
        />
    );
};

export default PreviewContainer;
