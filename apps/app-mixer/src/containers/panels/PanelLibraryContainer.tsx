import React from 'react';
import styled from 'styled-components';
import { selectors } from '../../store';
import { Empty } from '@gdi/web-ui';
import { PanelLibraryImagesContainer } from './PanelLibraryImagesContainer';
import { PanelLibraryWidgetsContainer } from './PanelLibraryWidgetsContainer';
import { useSelector } from 'react-redux';

export const PanelLibraryContainer = (_props: any) => {
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const panelLibraryFlavour = useSelector(
        selectors.base.$panelLibraryFlavour
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

    switch (panelLibraryFlavour) {
        case 'images':
            return <PanelLibraryImagesContainer />;
        case 'widgets':
            return <PanelLibraryWidgetsContainer />;
        default:
            return <></>;
    }
};

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
`;
