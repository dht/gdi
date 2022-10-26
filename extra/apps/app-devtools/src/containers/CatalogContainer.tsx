import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const CatalogContainer = () => {
    return <Catalog />;
};
