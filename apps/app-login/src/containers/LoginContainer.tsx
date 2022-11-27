import React from 'react';
import Login from '../components/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const LoginContainer = () => {
    return <Login />;
};

export default LoginContainer;
