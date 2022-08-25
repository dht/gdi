import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';
import { LibraryImagesContainer } from '../LibraryImagesContainer';
import { LibraryBlocksContainer } from '../LibraryBlocksContainer';
import { Empty } from '@gdi/web-ui';

export const PanelLibraryContainer = (props: any) => {
    const mixerState = useSelector(selectors.raw.$rawMixerState);
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);
    const toolId = mixerState.selectedToolId;

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
                <LibraryImagesContainer
                    overwrites={{
                        mode: 'minimal',
                        showTools: false,
                    }}
                    columns={2}
                />
            );
        case 'browse':
            return <LibraryBlocksContainer />;
        default:
            return <></>;
    }
};
