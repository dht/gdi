import React from 'react';
import './index.scss';
import { config } from './main.config';
import { createRoot } from 'react-dom/client';
import 'igrid/dist/index.css';
// import '@gdi/web-ui/index.css';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(<React.StrictMode>static</React.StrictMode>);
}
0;
