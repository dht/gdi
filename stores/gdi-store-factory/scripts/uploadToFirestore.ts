import { state } from './state';
import { upload } from './methodsFirebase';

const nodeTypes = {
    appStateFactory: 'single',
    layouts: 'groupedList',
    customBlocks: 'groupedList',
};

upload(state, nodeTypes);
