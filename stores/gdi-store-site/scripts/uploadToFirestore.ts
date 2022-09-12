import { state } from './state';
import { upload } from './methodsFirebase';

const nodeTypes = {
    meta: 'single',
    palette: 'single',
    fontSizes: 'single',
    spacing: 'single',
    fonts: 'single',
    instancesBlocks: 'collection',
    breakpoints: 'collection',
    blocks: 'collection',
    images: 'collection',
    pages: 'collection',
    instancesMapColors: 'collection',
    instancesMapStrings: 'collection',
    instancesProps: 'collection',
    strings: 'single',
};

upload(state, nodeTypes);
