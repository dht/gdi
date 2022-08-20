import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { ContentContainer } from './ContentContainer';

export const PanelContentContainer = () => {
    const instance = useSelector(selectors.base.$content);

    return (
        <>
            <ContentContainer instance={instance} panel />
        </>
    );
};
