import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { Modal } from '@gdi/web-ui';
import { FlexPropertiesContainer } from '../FlexPropertiesContainer';

export const ModalFlexPropertiesContainer = () => {
    const dispatch = useDispatch();
    const flexEntity = useSelector(selectors.base.$flexEntity);
    const appState = useSelector(selectors.raw.$rawFactoryState);

    const callbacks = useMemo(
        () => ({
            onClose: () => {
                dispatch(
                    actions.appStateFactory.patch({
                        showPropertiesModal: false,
                    })
                );
            },
        }),
        []
    );

    if (!appState.showPropertiesModal || !flexEntity) {
        return null;
    }

    const { id, locationId } = flexEntity;

    const title = [locationId, id].filter((i) => i).join(' | ');
    const modalTitle = 'Properties for ' + title;

    return (
        <Modal open={true} title={modalTitle} onClose={callbacks.onClose}>
            <FlexPropertiesContainer onClose={callbacks.onClose} />
        </Modal>
    );
};

export default ModalFlexPropertiesContainer;
