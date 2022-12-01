import React from 'react';
import Site from '../components/Site/Site';
import { useSelector } from 'react-redux';
import { selectors } from '../store';

export const SiteContainer = () => {
    const elements = useSelector(selectors.base.$instances);
    const datasets = useSelector(selectors.raw.$rawDatasets);

    return <Site elements={elements} datasets={datasets} />;
};
