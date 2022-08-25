import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';
import { ContentContainer } from '../ContentContainer';
import { Empty } from '@gdi/web-ui';

export const PanelContentContainer = (props: any) => {
    const currentIds = useSelector(selectors.raw.$rawCurrentIds);

    if (!currentIds.selectedInstanceId) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    return <ContentContainer />;
};
