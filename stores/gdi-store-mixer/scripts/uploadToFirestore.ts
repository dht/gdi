import { state } from './state';
import { upload } from './methodsFirebase';

const nodeTypes = {
    appStateMixer: 'single',
    meta: 'single',
    currentIds: 'single',
    libraryImages: 'collection',
    libraryBlocks: 'collection',
    libraryTypography: 'collection',
    libraryPalettes: 'collection',
    locales: 'collection',
    packages: 'single',
};

upload(state, nodeTypes);
