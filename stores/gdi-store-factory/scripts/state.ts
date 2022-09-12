import { IFactoryStore } from '../src/types';

export const state: IFactoryStore = {
    appStateFactory: {
        stateKey: 'factory',
        mode: 'visual',
        selectedToolId: 'data',
    },
    currentIdsFactory: {
        layoutId: '',
        customBlockId: '',
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
                    parentId: '0',
                    entityType: 'container',
                    resolution: '1080p',
                    locationId: 'left_1',
                },
                {
                    id: 'i2',
                    parentId: '1',
                    entityType: 'item',
                    resolution: '1080p',
                    locationId: 'left_2',
                },
            ],
        },
    },
    customBlocks: {
        b1: {
            id: 'b1',
            name: '',
            layoutId: 'l1',
            items: [
                {
                    id: 'i1',
                    widgetId: 'widget',
                    locationId: 'left_1',
                },
            ],
        },
    },
};
