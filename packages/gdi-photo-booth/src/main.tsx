import React from 'react';
import './index.scss';
import { Chair } from './components/Chair/Chair';
import { templates } from '@gdi/template-gdi';
import { createRoot } from 'react-dom/client';
import 'igrid/dist/index.css';
// import '@gdi/web-ui/index.css';

const container = document.getElementById('root');

const templateName = 'gdi';
const blockName = 'hero-simple';
const blockKey = `com.useGdi.templates.${templateName}.${blockName}`;
const block = templates.gdi.blocks[blockKey];

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <Chair component={block.component} blockInfo={block.info} />
        </React.StrictMode>
    );
}
0;
