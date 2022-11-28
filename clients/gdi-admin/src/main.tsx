import React from 'react';
import { $s } from 'shared-base';
import { Bootstrap } from '@gdi/platformer';
import { config } from './main.config';
import { createRoot } from 'react-dom/client';
import { LogsSystem } from '@gdi/web-ui';
import './index.scss';
import './main.language';
import 'igrid/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import '@gdi/web-ui/dist/index.css';
import 'firebaseui/dist/firebaseui.css';

const DEBUG = false;

const container = document.getElementById('root');

if (container) {
    $s('main.tsx');
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <Bootstrap config={config} />
            {DEBUG && <LogsSystem />}
        </React.StrictMode>
    );
}
