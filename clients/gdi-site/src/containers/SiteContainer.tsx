import React from 'react';
import Site from '../components/Site/Site';
import { useSelector } from 'react-redux';
import { selectors } from '../store';

export const SiteContainer = () => {
    const pages = useSelector(selectors.raw.$rawPages);

    return <Site pages={pages} />;
};
