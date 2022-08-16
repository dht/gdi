import React from 'react';
import { createRoot } from 'react-dom/client';
import { initTemplates } from './template.init';
import { LibraryBuilder } from '@gdi/engine';
import { PhotoBooth } from '@gdi/web-ui';
import './index.scss';
import 'igrid/dist/index.css';
import '@gdi/web-base-ui/dist/normalize.css';
import '@gdi/web-ui/dist/index.css';

const container = document.getElementById('root');

const root = createRoot(container!);

const libraryBuilder = new LibraryBuilder();
initTemplates(libraryBuilder);
const { widgets } = libraryBuilder.build();

root.render(
    <React.StrictMode>
        <PhotoBooth widgets={widgets} />
    </React.StrictMode>
);
