import React, { useMemo } from 'react';
import styled from 'styled-components';
import { actions, selectors } from '../../store';
import { ElementSelector, Empty } from '@gdi/web-ui';
import { PanelLibraryImagesContainer } from './PanelLibraryImagesContainer';
import { PanelLibraryWidgetsContainer } from './PanelLibraryWidgetsContainer';
import { useDispatch, useSelector } from 'react-redux';

export const PanelLibraryContainer = (_props: any) => {
    const dispatch = useDispatch();
    const mixerState = useSelector(selectors.raw.$rawMixerState);
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const imageFields = useSelector(selectors.options.$imageFields);

    const toolId =
        currentIds.selectedInstanceId === '<NEW>'
            ? 'browse'
            : mixerState.selectedToolId;

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
            return (
                <Col>
                    <ElementSelector
                        onChange={callbacks.onFieldChange}
                        value={currentIds.fieldId}
                        options={imageFields}
                    />
                    <PanelLibraryImagesContainer />
                </Col>
            );
        case 'browse':
            return <PanelLibraryWidgetsContainer />;
        default:
            return <></>;
    }
};

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
