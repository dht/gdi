import React from 'react';
import FlowDesigner from '../components/FlowDesigner/FlowDesigner';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';

export const FlowDesignerContainer = () => {
    return <FlowDesigner />;
};
