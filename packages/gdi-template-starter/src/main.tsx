import React from 'react';
import { createRoot } from 'react-dom/client';
import { PhotoBooth } from '@gdi/web-ui';
import { LibraryBuilder } from '@gdi/engine';
import { initTemplate } from './template.init';
import '@gdi/web-base-ui/dist/normalize.css';
import '@gdi/web-base-ui/dist/index.css';
import '@gdi/web-ui/dist/index.css';
import 'igrid/index.css';
import './index.scss';

const libraryBuilder = new LibraryBuilder();

initTemplate(libraryBuilder);

export const { widgets, templates } = libraryBuilder.build();

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <PhotoBooth widgets={widgets} />
        </React.StrictMode>
    );
}
