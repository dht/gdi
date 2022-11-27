import React from 'react';
import Voice from '../components/Voice/Voice';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const VoiceContainer = () => {
    return <Voice />;
};

export default VoiceContainer;
