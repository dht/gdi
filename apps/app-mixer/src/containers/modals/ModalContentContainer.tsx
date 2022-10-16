import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { Modal } from '@gdi/web-ui';
import { ContentContainer } from '../ContentContainer';

export const ModalContentContainer = () => {
    const dispatch = useDispatch();
    const element = useSelector(selectors.base.$instanceContent);
    const formConfig = useSelector(selectors.forms.$contentFormConfig);
    const formData = useSelector(selectors.forms.$contentFormData);
    const formOptions = useSelector(selectors.forms.$contentFormOptions);

    function onClose() {
        dispatch(actions.currentIds.patch({ contentInstanceId: '' }));
    }

    if (!element) {
        return null;
    }

    return (
        <Modal open={true} title='Content' onClose={onClose}>
            <ContentContainer
                element={element}
                formConfig={formConfig}
                formData={formData}
                formOptions={formOptions}
            />
        </Modal>
    );
};
