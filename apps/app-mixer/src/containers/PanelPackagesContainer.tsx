import React from 'react';
import Packages from '../components/Packages/Packages';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const PanelPackagesContainer = () => {
    const packages = useSelector(selectors.base.$packages);

    return <Packages items={packages} />;
};
