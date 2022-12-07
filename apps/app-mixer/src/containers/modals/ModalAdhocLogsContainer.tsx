import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';
import { Modal, LogsConsole } from '@gdi/web-ui';
import { useAdhocLogs } from '@gdi/hooks';

export const ModalAdhocLogsContainer = () => {
    const dispatch = useDispatch();
    const mixerState = useSelector(selectors.raw.$rawMixerState);

    function onClose() {
        dispatch(
            actions.appStateMixer.patch({
                showConsoleLogs: false,
            })
        );
    }

    const items = useAdhocLogs();

    if (!mixerState.showConsoleLogs) {
        return null;
    }

    return (
        <Modal open={true} title='Log' onClose={onClose}>
            <LogsConsole items={items} />
        </Modal>
    );
};

export default ModalAdhocLogsContainer;
