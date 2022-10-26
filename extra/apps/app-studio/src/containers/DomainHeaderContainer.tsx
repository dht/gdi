import React from 'react';
import DomainHeader from '../components/DomainHeader/DomainHeader';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const DomainHeaderContainer = () => {
    return <DomainHeader />;
};
