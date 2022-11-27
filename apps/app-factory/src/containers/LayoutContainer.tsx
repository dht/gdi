import React from 'react';
import { LayoutTableContainer } from './LayoutTableContainer';
import { LayoutVisualContainer } from './LayoutVisualContainer';
import { selectors } from '../store';
import { useSelector } from 'react-redux';

export const LayoutContainer = () => {
    const appState = useSelector(selectors.raw.$rawFactoryState);

    return appState.showItemsInTable ? (
        <LayoutTableContainer />
    ) : (
        <LayoutVisualContainer />
    );
};

export default LayoutContainer;
