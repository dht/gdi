import React from 'react';
import './index.scss';
import { createRoot } from 'react-dom/client';
import '@gdi/web-ui/dist/index.css';
import 'igrid/dist/index.css';
import App from './components/App/App';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
