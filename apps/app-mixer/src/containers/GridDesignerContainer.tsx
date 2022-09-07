import React from 'react';
import GridDesigner from '../components/GridDesigner/GridDesigner';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const GridDesignerContainer = () => {
    return <GridDesigner />;
};
