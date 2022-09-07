import React from 'react';
import FlexDesigner from '../components/FlexDesigner/FlexDesigner';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { Modal } from '@gdi/web-ui';

export const FlexDesignerContainer = () => {
    const dispatch = useDispatch();
    const element = useSelector(selectors.base.$elementContent);

    function onClose() {
        dispatch(actions.currentIds.patch({ contentInstanceId: '' }));
    }

    if (!element) {
        return null;
    }

    return (
        <Modal open={true} title='Content' onClose={onClose}>
            <FlexDesigner />
        </Modal>
    );
};
