import React, { useMemo } from 'react';
import LibraryWidgets from '../components/LibraryWidgets/LibraryWidgets';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const LibraryWidgetsContainer = () => {
    const dispatch = useDispatch();
    const libraryWidgets = useSelector(selectors.base.$libraryWidgets);
    const galleryState = useSelector(selectors.raw.$rawWidgetGalleryState);

    const callbacks = useMemo(
        () => ({
            onSelectWidget: (widgetId: string) => {
                dispatch({
                    type: 'ELEMENT_WIDGET_SELECT',
                    widgetId,
                });
            },
            onViewChange: (viewMode: string) => {
                dispatch(
                    actions.widgetGalleryState.patch({
                        mode: viewMode as IGalleryViewMode,
                    })
                );
            },
            onSearch: (search?: string) => {
                dispatch(
                    actions.widgetGalleryState.patch({
                        search,
                    })
                );
            },
            onFilterChange: (filter: string) => {
                dispatch(
                    actions.widgetGalleryState.patch({
                        filter: filter as IWidgetsFilter,
                    })
                );
            },
        }),
        []
    );

    const columns = window.innerWidth > 1700 ? 2 : 1;

    return (
        <LibraryWidgets
            state={galleryState}
            columns={columns}
            items={libraryWidgets}
            callbacks={callbacks}
        />
    );
};
