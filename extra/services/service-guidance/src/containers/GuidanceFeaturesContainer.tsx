import React from 'react';
import GuidanceFeatures from '../components/GuidanceFeatures/GuidanceFeatures';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store/selectors.index';

export const GuidanceFeaturesContainer = () => {
    const bmsFeatures = useSelector(selectors.raw.$rawBmsFeatures);

    console.log('bmsFeatures ->', bmsFeatures);

    return <GuidanceFeatures />;
};

export default GuidanceFeaturesContainer;
