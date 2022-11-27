import React from 'react';
import DomainHistory from '../components/DomainHistory/DomainHistory';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const DomainHistoryContainer = () => {
    return <DomainHistory />;
};

export default DomainHistoryContainer;
