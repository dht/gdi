import React, { useMemo } from 'react';
import { actions, selectors } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import LibraryWidgets from '../../components/LibraryWidgets/LibraryWidgets';

export const PanelLibraryWidgetsContainer = (_props: any) => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.base.$libraryWidgetsAll);

    const galleryOptions = useMemo(
        () => ({
            columns: 3,
            selectionMode: 'choose' as any,
            hideOverlay: true,
        }),
        []
    );

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

    return (
        <LibraryWidgets
            items={items as any}
            callbacks={callbacks}
            galleryOptions={galleryOptions}
            hideParts={[
                'header',
                'buttons',
                'preview',
                'filter',
                'search',
                'tagging',
                'tools',
            ]}
        />
    );
};

export default PanelLibraryWidgetsContainer;
