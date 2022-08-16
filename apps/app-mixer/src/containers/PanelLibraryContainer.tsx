import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { LibraryContainer } from './LibraryContainer';

export const PanelLibraryContainer = (props: any) => {
    return (
        <>
            <LibraryContainer />
        </>
    );
};
