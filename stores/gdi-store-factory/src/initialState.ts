import { generateReducersForStore } from 'redux-store-generator';
import { actions } from './actions';
import { IFactoryStore } from './types';

export const initialState: IFactoryStore = {
    appStateFactory: {
        stateKey: 'factory',
        mode: 'structure',
        selectedToolId: 'data',
        showItemsInTable: false,
        showPropertiesModal: false,
    },
    currentIdsFactory: {
        layoutId: '',
        customBlockId: '',
        flexEntityId: '',
        widgetId: '',
        resolutionId: '1080p',
    },
    layouts: {
        '1': {
            id: '1',
            name: 'two columns',
            items: [
                {
                    id: '1',
                    parentId: '0',
                    entityType: 'container',
                    resolution: '1080p',
                    locationId: 'left_1',
                    order: 1,
                },
                {
                    id: '2',
                    parentId: '1',
                    entityType: 'item',
                    resolution: '1080p',
                    locationId: 'left_2',
                    order: 2,
                },
            ],
        },
    },
    customBlocks: {
        '1': {
            id: '1',
            name: '',
            layoutId: '1',
            items: [
                {
                    id: '1',
                    widgetId: 'widget',
                    locationId: 'left_1',
                },
            ],
        },
    },
};

export const reducers = generateReducersForStore<IFactoryStore>(initialState);

export const clearState = (store: any) => {
    setTimeout(() => {
        store.dispatch(actions.layouts.setAll({}));
        store.dispatch(actions.customBlocks.setAll({}));
    });
    return store;
};
