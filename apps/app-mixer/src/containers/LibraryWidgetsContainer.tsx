import React, { useMemo } from 'react';
import LibraryWidgets from '../components/LibraryWidgets/LibraryWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const LibraryWidgetsContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.base.$libraryWidgets);

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

    return <LibraryWidgets items={items} callbacks={callbacks} />;
};
