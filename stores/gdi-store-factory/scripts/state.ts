import { IFactoryStore } from '../src/types';

export const state: IFactoryStore = {
    appStateFactory: {
        stateKey: 'factory',
        mode: 'visual',
        selectedToolId: 'data',
        showItemsInTable: false,
        showPropertiesModal: false,
        isLoadingLayoutItems: false,
    },
    currentIdsFactory: {
        layoutId: '',
        flexEntityId: '',
        widgetId: '',
        resolutionId: '',
    },
    layouts: {
        l1: {
            id: 'l1',
            name: 'two columns',
            items: [
                {
                    id: 'i1',
                    parentId: '',
                    entityType: 'container',
                    resolution: '1080p',
                    direction: 'row',
                    locationId: 'left_1',
                },
                {
                    id: 'i2',
                    parentId: 'i1',
                    entityType: 'item',
                    resolution: '1080p',
                    locationId: 'left_2',
                    order: 1,
                },
            ],
        },
    },
};
