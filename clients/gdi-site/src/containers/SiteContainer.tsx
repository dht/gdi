import React from 'react';
import Site from '../components/Site/Site';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const SiteContainer = () => {
    const elements = useSelector(selectors.base.$elements);

    return <Site elements={elements} />;
};
