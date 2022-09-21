import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateFactory: 'single',
    layouts: 'groupedList',
    articles: 'collection',
    articleCategories: 'collection',
};

seed(state, nodeTypes);
