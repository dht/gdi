import React from 'react';
import './index.scss';
import { createRoot } from 'react-dom/client';
import 'igrid/dist/index.css';
import App from './components/App/App';
import '@gdi/web-ui/dist/index.css';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
