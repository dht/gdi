import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store/selectors.index';
import { GuidanceBusinessInfo } from '../components/GuidanceBusinessInfo/GuidanceBusinessInfo';

export const GuidanceBusinessInfoContainer = () => {
    const businessDomains = useSelector(selectors.raw.$rawBusinessDomains);

    console.log('businessDomains ->', businessDomains);

    return <GuidanceBusinessInfo />;
};

export default GuidanceBusinessInfoContainer;
