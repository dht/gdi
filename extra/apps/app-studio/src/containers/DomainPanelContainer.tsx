import React from 'react';
import DomainPanel from '../components/DomainPanel/DomainPanel';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const DomainPanelContainer = () => {
    return <DomainPanel />;
};
