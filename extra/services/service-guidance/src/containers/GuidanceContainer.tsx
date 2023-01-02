import React from 'react';
import { useSelector } from 'react-redux';
import Guidance from '../components/Guidance/Guidance';
import { selectors } from '../store/selectors.index';

export const GuidanceContainer = () => {
    const bmsFeatures = useSelector(selectors.raw.$rawBmsFeatures);
    const businessDomains = useSelector(selectors.raw.$rawBusinessDomains);

    return (
        <Guidance bmsFeatures={bmsFeatures} businessDomains={businessDomains} />
    );
};

export default GuidanceContainer;
