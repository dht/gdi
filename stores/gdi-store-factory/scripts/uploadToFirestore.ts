import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateFactory: 'single',
    layouts: 'groupedList',
};

seed(state, nodeTypes);
