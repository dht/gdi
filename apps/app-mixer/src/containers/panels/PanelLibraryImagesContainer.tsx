import React, { useMemo } from 'react';
import styled from 'styled-components';
import { actions, selectors } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import LibraryImages from '../../components/LibraryImages/LibraryImages';

export const PanelLibraryImagesContainer = (_props: any) => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.base.$libraryImages);

    const galleryOptions: IGalleryOptions = {
        columns: 3,
        selectionMode: 'choose',
        hideOverlay: true,
    };

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
                    type: 'SWITCH_IMAGE_ACTION',
                    imageId: ids[0],
                });
            },
        }),
        []
    );

    return (
        <LibraryImages
            galleryOptions={galleryOptions}
            items={items}
            callbacks={callbacks}
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

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
