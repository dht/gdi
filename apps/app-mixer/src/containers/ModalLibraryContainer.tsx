import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { Modal, Form } from '@gdi/web-ui';
import { LibraryContainer } from './LibraryContainer';

export const ModalLibraryContainer = () => {
    const dispatch = useDispatch();

    function onClose() {
        dispatch(actions.currentIds.patch({ libraryInstanceId: '' }));
    }

    return (
        <Modal open={true} title='Content' onClose={onClose}>
            <LibraryContainer />
        </Modal>
    );
};
