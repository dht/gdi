import React from 'react';
import VoiceTop from '../components/VoiceTop/VoiceTop';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const VoiceTopContainer = () => {
    return <VoiceTop />;
};

export default VoiceTopContainer;
