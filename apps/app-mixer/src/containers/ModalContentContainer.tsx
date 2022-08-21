import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { Modal, Form } from '@gdi/web-ui';
import { ContentContainer } from './ContentContainer';

export const ModalContentContainer = () => {
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
            <ContentContainer />
        </Modal>
    );
};
