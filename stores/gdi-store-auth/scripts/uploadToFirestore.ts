import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    users: 'collection',
    roles: 'collection',
};

seed(state, nodeTypes);
