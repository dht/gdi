import React from 'react';
import { $s } from 'shared-base';
import { Bootstrap } from '@gdi/platformer';
import { config } from './main.config';
import { createRoot } from 'react-dom/client';
import { SystemLogs, Multi, Form } from '@gdi/web-ui';
import './index.scss';
import 'igrid/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';
import '@gdi/web-ui/dist/index.css';
import 'firebaseui/dist/firebaseui.css';
import { articles } from './data.articles';
import { Prompt } from '@gdi/web-base-ui';

const DEBUG = false;
const container = document.getElementById('root');

if (container) {
    $s('main.tsx');
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <div
                style={{
                    margin: '50px',
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#445',
                }}
            >
                <Multi
                    id=''
                    itemType='article'
                    data={Object.values(articles)}
                />
                <Prompt formComponent={Form} />
            </div>
            {/* <Bootstrap config={config} /> */}
            {/* {DEBUG && <SystemLogs />} */}
        </React.StrictMode>
    );
}
