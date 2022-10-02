import { state } from './state';
import { seed } from '@gdi/store-seeder';

console.log('libraryImages ->', state.libraryImages);

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

seed(state, nodeTypes);
