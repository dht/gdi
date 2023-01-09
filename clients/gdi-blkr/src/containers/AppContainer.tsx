import React, { useMemo } from 'react';
import App from '../app/App/App';
import { Routes, Route } from 'react-router-dom';
import { BlkrContainer } from '@gdi/blkr';

export type AppContainerProps = {};

export const AppContainer = (props: AppContainerProps) => {
    return (
        <App>
            <Routes>
                <Route path='/' element={<BlkrContainer />} />
            </Routes>
        </App>
    );
};
