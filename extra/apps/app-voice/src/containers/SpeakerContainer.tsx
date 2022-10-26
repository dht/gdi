import React from 'react';
import Speaker from '../components/Speaker/Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const SpeakerContainer = () => {
    const isSpeaking = useSelector(selectors.raw.$rawVoiceState).isSpeaking;

    return <Speaker isSpeaking={isSpeaking} />;
};
