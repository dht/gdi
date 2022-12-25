import React from 'react';
import Upgrades from '../components/Upgrades/Upgrades';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';

export const UpgradesContainer = () => {
    return <Upgrades />;
};

export default UpgradesContainer;
