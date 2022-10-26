import React from 'react';
import ProTip from '../components/ProTip/ProTip';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const ProTipContainer = () => {
    return <ProTip />;
};
