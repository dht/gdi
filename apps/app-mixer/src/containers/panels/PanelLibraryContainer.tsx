import React, { useMemo } from 'react';
import styled from 'styled-components';
import { actions, selectors } from '../../store';
import { ElementSelector, Empty } from '@gdi/web-ui';
import { LibraryBlocksContainer } from '../LibraryBlocksContainer';
import { LibraryImagesContainer } from '../LibraryImagesContainer';
import { useDispatch, useSelector } from 'react-redux';

export const PanelLibraryContainer = (_props: any) => {
    const dispatch = useDispatch();
    const mixerState = useSelector(selectors.raw.$rawMixerState);
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const imageFieldsForCurrentElement = useSelector(
        selectors.base.$imageFieldsForCurrentElement
    );
    const toolId = mixerState.selectedToolId;

    const callbacks = useMemo(
        () => ({
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

    if (!currentIds.selectedInstanceId) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    switch (toolId) {
        case 'data':
            const columns = window.innerWidth > 1700 ? 2 : 1;

            return (
                <Col>
                    <ElementSelector
                        onChange={callbacks.onFieldChange}
                        value={currentIds.fieldId}
                        options={imageFieldsForCurrentElement}
                    />
                    <LibraryImagesContainer
                        overwrites={{
                            mode: 'minimal',
                            showTools: false,
                        }}
                        columns={columns}
                    />
                </Col>
            );
        case 'browse':
            return <LibraryBlocksContainer />;
        default:
            return <></>;
    }
};

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
