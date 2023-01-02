import React from 'react';
import Boosters from '../components/Boosters/Boosters';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const BoostersContainer = () => {
    return <Boosters />;
};

export default BoostersContainer;
