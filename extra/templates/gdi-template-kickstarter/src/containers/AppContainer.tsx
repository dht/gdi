import React, { useMemo } from 'react';
import App from '../app/App/App';
import { SiteContainer } from './SiteContainer';

export type AppContainerProps = {};

export const AppContainer = (props: AppContainerProps) => {
    return (
        <App>
            <SiteContainer />
        </App>
    );
};
