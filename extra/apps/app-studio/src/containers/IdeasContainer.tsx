import React from 'react';
import Ideas from '../components/Ideas/Ideas';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const IdeasContainer = () => {
    return <Ideas />;
};
