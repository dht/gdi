import React, { useMemo } from 'react';
import GalleryWidgets from '../components/GalleryWidgets/GalleryWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const GalleryWidgetsContainer = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectors.base.$libraryWidgetsAll);

    const callbacks = useMemo(
        () => ({
            onItemAction: (id: string, action: string, data?: Json) => {
                dispatch({
                    type: 'IMAGE_ACTION',
                    actionType: action,
                    id,
                    data,
                });
            },
            onAction: (actionId: string) => {
                switch (actionId) {
                    case 'selection':
                        dispatch(
                            actions.appStateMixer.patch({
                                showImageUploadModal: true,
                            })
                        );
                        break;
                }
            },
            onSelectionChange: (ids: string[]) => {
                dispatch({
                    type: 'ELEMENT_WIDGET_SELECT',
                    widgetId: ids[0],
                });
            },
        }),
        []
    );

    return <GalleryWidgets data={data} callbacks={callbacks} />;
};

export default GalleryWidgetsContainer;
