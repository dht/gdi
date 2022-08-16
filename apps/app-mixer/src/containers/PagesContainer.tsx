import React from 'react';
import Pages from '../components/Pages/Pages';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const PagesContainer = () => {
    return <Pages />;
};
