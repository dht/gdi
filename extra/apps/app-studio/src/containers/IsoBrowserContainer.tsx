import React from 'react';
import IsoBrowser from '../components/IsoBrowser/IsoBrowser';
import { selectors } from '../selectors';
import { useDispatch, useSelector } from 'react-redux';

export const IsoBrowserContainer = () => {
    const dispatch = useDispatch();
    const buildings = useSelector(selectors.raw.$rawBuildings);
    const assets = useSelector(selectors.raw.$rawAssets);

    function onSelect(building: any) {
        dispatch({ type: 'NEW_BUILDING', building });
    }

    return (
        <IsoBrowser onSelect={onSelect} assets={assets} buildings={buildings} />
    );
};

export default IsoBrowserContainer;
