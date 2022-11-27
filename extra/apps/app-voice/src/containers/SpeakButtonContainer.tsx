import React, { useCallback } from 'react';
import SpeakButton from '../components/SpeakButton/SpeakButton';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';

export const SpeakButtonContainer = () => {
    const isSpeaking = useSelector(selectors.raw.$rawVoiceState).isSpeaking;

    const dispatch = useDispatch();

    const onMouseDown = useCallback(() => {
        dispatch(actions.appStateVoice.patch({ isSpeaking: true }));
    }, []);

    const onMouseUp = useCallback(() => {
        dispatch(actions.appStateVoice.patch({ isSpeaking: false }));
    }, []);

    return (
        <SpeakButton
            isSpeaking={isSpeaking}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        />
    );
};

export default SpeakButtonContainer;
