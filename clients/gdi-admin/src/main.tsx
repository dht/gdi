import React from 'react';
import { $s } from 'shared-base';
import { Bootstrap } from '@gdi/platformer';
import { config } from './main.config';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'igrid/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import '@gdi/web-ui/dist/index.css';
import 'firebaseui/dist/firebaseui.css';
import { SystemLogs } from '@gdi/web-ui';
import { Dev } from './main.dev';
import './main.language';

const DEBUG = false;
const container = document.getElementById('root');

if (container) {
    $s('main.tsx');
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            {/* <Dev /> */}
            <Bootstrap config={config} />
            {DEBUG && <SystemLogs />}
        </React.StrictMode>
    );
}
