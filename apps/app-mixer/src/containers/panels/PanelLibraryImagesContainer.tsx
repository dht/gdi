import React, { useMemo } from 'react';
import styled from 'styled-components';
import { actions, selectors } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import LibraryImages from '../../components/LibraryImages/LibraryImages';
import { ElementSelector, LibrarySelector } from '@gdi/web-ui';

export const PanelLibraryImagesContainer = (_props: any) => {
    const dispatch = useDispatch();
    const items = useSelector(selectors.base.$libraryImages);
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const imageFields = useSelector(selectors.options.$imageFields);

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
                    case 'new':
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
            onFieldChange: (value: string = '') => {
                dispatch(
                    actions.currentIds.patch({
                        fieldId: value,
                    })
                );
            },
        }),
        []
    );

    console.log('imageFields ->', imageFields);

    console.log('currentIds.fieldId ->', currentIds.fieldId);

    return (
        <Row>
            <Top>
                <ElementSelector
                    onChange={callbacks.onFieldChange}
                    value={currentIds.fieldId}
                    options={imageFields}
                />
            </Top>
            <LibraryImages
                galleryOptions={galleryOptions}
                items={items}
                callbacks={callbacks}
                hideParts={['header', 'preview', 'filter', 'tagging', 'tools']}
            />
        </Row>
    );
};

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
`;

export const Top = styled.div`
    position: absolute;
    top: 27px;
    left: 30px;
    right: 390px;
    display: flex;
    flex-direction: row;
    align-items: center;
    zoom: 0.9;
    z-index: 9;
`;

export const ElementWrapper = styled.div``;
