import { state } from './state';
import { upload } from './methods.firebase.nodes';

const nodeTypes = {
    appStateFactory: 'single',
    layouts: 'groupedList',
};

upload(state, nodeTypes);
