import React from 'react';
import GuidanceRanking from '../components/GuidanceRanking/GuidanceRanking';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store/selectors.index';

export const GuidanceRankingContainer = () => {
    const businessDomains = useSelector(selectors.raw.$rawBusinessDomains);

    console.log('businessDomains ->', businessDomains);

    return <GuidanceRanking />;
};

export default GuidanceRankingContainer;
