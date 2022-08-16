import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { Modal, Form } from '@gdi/web-ui';
import { ContentContainer } from './ContentContainer';

export const ModalContentContainer = () => {
    const dispatch = useDispatch();
    const instance = useSelector(selectors.base.$content);

    function onClose() {
        dispatch(actions.currentIds.patch({ contentInstanceId: '' }));
    }

    if (!instance) {
        return null;
    }

    return (
        <Modal open={true} title='Content' onClose={onClose}>
            <ContentContainer instance={instance} />
        </Modal>
    );
};
