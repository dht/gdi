import React, { useCallback } from 'react';
import Transcript from '../components/Transcript/Transcript';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { useNavigate } from 'react-router-dom';

export const TranscriptContainer = () => {
    const navigate = useNavigate();

    const showStateDrawer = useCallback(() => {
        navigate('/voice/viz');
    }, []);

    return <Transcript showStateDrawer={showStateDrawer} />;
};
