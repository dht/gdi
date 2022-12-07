import React, { useMemo } from 'react';
import GalleryWidgets from '../components/GalleryWidgets/GalleryWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const GalleryWidgetsContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectors.base.$libraryWidgetsAll);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {},
            onSelectionChange: (ids: string[]) => {
                dispatch({
                    type: 'SWITCH_WIDGET_ACTION',
                    widgetId: ids[0],
                });
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <GalleryWidgets data={data} callbacks={callbacks} dispatch={dispatch} />
    );
};

export default GalleryWidgetsContainer;
