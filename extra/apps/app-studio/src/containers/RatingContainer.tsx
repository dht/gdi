import React from 'react';
import Rating from '../components/Rating/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const RatingContainer = () => {
    return <Rating />;
};
