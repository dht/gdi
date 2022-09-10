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
        '1': {
            id: '1',
            name: 'two columns',
            items: [
                {
                    id: 1,
                    parentId: 0,
                    entityType: 'container',
                    resolution: '1080p',
                    locationId: 'left_1',
                },
                {
                    id: 2,
                    parentId: 1,
                    entityType: 'item',
                    resolution: '1080p',
                    locationId: 'left_2',
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
