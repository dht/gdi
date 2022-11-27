import React from 'react';
import Poe from '../components/Poe/Poe';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const PoeContainer = () => {
    return <Poe />;
};

export default PoeContainer;
