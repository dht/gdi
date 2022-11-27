import Babylon from '../components/Babylon/Babylon';
import React, { RefObject, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectors, selectorsAuth } from '../selectors';

export const BabylonContainer = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectorsAuth.raw.$rawAuthState).isLoggedIn;

    const init = useCallback((ref: RefObject<HTMLCanvasElement>) => {
        dispatch({ type: 'INIT_BABYLON', ref });
    }, []);

    if (!isLoggedIn) {
        return null;
    }

    return <Babylon init={init} />;
};

export default BabylonContainer;
