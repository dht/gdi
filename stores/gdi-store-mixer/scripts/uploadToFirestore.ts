import { state } from './state';
import { upload } from './methods.firebase.nodes';

const nodeTypes = {
    appStateMixer: 'single',
    meta: 'single',
    currentIds: 'single',
    libraryImages: 'collection',
    libraryWidgets: 'collection',
    libraryTypography: 'collection',
    libraryPalettes: 'collection',
    locales: 'collection',
    packages: 'single',
};

upload(state, nodeTypes);
