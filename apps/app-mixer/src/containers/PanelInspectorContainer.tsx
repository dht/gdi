import React from 'react';
import Inspector from '../components/Inspector/Inspector';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const PanelInspectorContainer = () => {
    return <Inspector />;
};
