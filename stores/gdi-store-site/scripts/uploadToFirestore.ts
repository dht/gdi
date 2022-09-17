import { state } from './state';
import { upload } from './methods.firebase.nodes';

const nodeTypes = {
    meta: 'single',
    palette: 'single',
    fontSizes: 'single',
    spacing: 'single',
    fonts: 'single',
    instances: 'collection',
    breakpoints: 'collection',
    widgets: 'collection',
    images: 'collection',
    pages: 'collection',
    instancesMapColors: 'collection',
    instancesMapStrings: 'collection',
    instancesProps: 'collection',
    strings: 'single',
};

upload(state, nodeTypes);
