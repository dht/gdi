import React from 'react';
import PlayMode from '../../components/PlayMode/PlayMode';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../../store';

export const ModalPlayModeContainer = () => {
    const dispatch = useDispatch();
    const mixerState = useSelector(selectors.raw.$rawMixerState);
    const showPlayModeMessage = mixerState.showPlayModeMessage;

    if (!showPlayModeMessage) {
        return null;
    }

    function onClose() {
        dispatch(actions.appStateMixer.patch({ showPlayModeMessage: false }));
    }

    return <PlayMode onClose={onClose} showModal={showPlayModeMessage} />;
};
