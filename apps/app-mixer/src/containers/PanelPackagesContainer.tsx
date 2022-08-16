import React from 'react';
import Packages from '../components/Packages/Packages';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const PanelPackagesContainer = () => {
    return <Packages />;
};
