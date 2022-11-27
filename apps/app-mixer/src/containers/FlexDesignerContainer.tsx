import React, { useMemo } from 'react';
import { FlexDesigner } from '@gdi/web-ui';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { Modal } from '@gdi/web-ui';

export const FlexDesignerContainer = () => {
    const dispatch = useDispatch();

    const callbacks = useMemo(
        () => ({
            onViewChange: (viewId: string) => {},
            onSearch: (search?: string) => {},
            onSelectTool: (toolId: string) => {},
            onTagClick: (tag: string) => {},
            onTagClear: () => {},
        }),
        []
    );

    return <FlexDesigner callbacks={callbacks} />;
};

export default FlexDesignerContainer;
