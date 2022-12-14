import React from 'react';
import Inspector from '../../components/Inspector/Inspector';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../../store';
import { Empty } from '@gdi/web-ui';

export const PanelInspectorContainer = (_props: any) => {
    const inspector = useSelector(selectors.base.$inspector);

    if (!inspector) {
        return (
            <Empty
                message='Select a block'
                iconName='AppIconDefault'
                withIcon
            />
        );
    }

    return <Inspector data={inspector} />;
};

export default PanelInspectorContainer;
