import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { Modal } from '@gdi/web-ui';
import { ImageUploadContainer } from '../ImageUploadContainer';

export const ModalImageUploadContainer = () => {
    const dispatch = useDispatch();
    const mixerState = useSelector(selectors.raw.$rawMixerState);
    const showImageUploadModal = mixerState.showImageUploadModal;

    function onClose() {
        dispatch(actions.appStateMixer.patch({ showImageUploadModal: false }));
    }

    if (!showImageUploadModal) {
        return null;
    }

    return (
        <Modal open={true} title='Image Upload' onClose={onClose}>
            <ImageUploadContainer onClose={onClose} />
        </Modal>
    );
};
