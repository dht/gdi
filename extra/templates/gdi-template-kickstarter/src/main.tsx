import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppContainer } from './containers/AppContainer';
import './index.scss';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <AppContainer />
        </React.StrictMode>
    );
}
