import React from 'react';
import Sims from '../components/Sims/Sims';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const SimsContainer = () => {
    return <Sims />;
};

export default SimsContainer;
