import React from 'react';
import './index.scss';
import { Bootstrap, initFirebase } from '@gdi/platformer';
import { config } from './main.config';
import { createRoot } from 'react-dom/client';
import 'igrid/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import '@gdi/web-ui/dist/index.css';
import { SystemLogs } from '@gdi/web-ui';
import { $s } from 'shared-base';

const DEBUG = false;
const container = document.getElementById('root');

if (container) {
    $s('main.tsx');
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <Bootstrap config={config} />
            {DEBUG && <SystemLogs />}
        </React.StrictMode>
    );
}
