import React from 'react';
import Logo from '../components/Logo/Logo';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const LogoContainer = () => {
    return <Logo />;
};
