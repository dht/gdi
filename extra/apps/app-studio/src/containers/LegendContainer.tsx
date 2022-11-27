import React from 'react';
import Legend from '../components/Legend/Legend';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const LegendContainer = () => {
    return <Legend />;
};

export default LegendContainer;
