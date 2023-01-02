import React from 'react';
import SyncConfig from '../components/SyncConfig/SyncConfig';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const SyncConfigContainer = () => {
    return <SyncConfig />;
};

export default SyncConfigContainer;
