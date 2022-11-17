import { IMixerInstructions } from '../types';

export const instructions_1: IMixerInstructions = [
    {
        id: '1',
        data: { id: 'p1', pageInstanceId: 'v1' },
        nodeName: 'libraryPages',
        entityType: 'pages',
        type: 'create',
    },
    {
        id: '2',
        data: { id: 'v1', pageId: 'p1' },
        nodeName: 'libraryPageInstances',
        entityType: 'pageInstances',
        type: 'create',
    },
    {
        id: '3',
        data: { id: 'i1', pageInstanceId: 'v1', widgetId: 'w1' },
        nodeName: 'libraryInstances',
        entityType: 'instances',
        type: 'create',
    },
    {
        id: '4',
        data: { id: 'i2', pageInstanceId: 'v1', widgetId: 'w2' },
        nodeName: 'libraryInstances',
        entityType: 'instances',
        type: 'create',
    },
    {
        id: '5',
        data: { id: 'i1' },
        nodeName: 'libraryInstancesProps',
        entityType: 'instancesProps',
        type: 'create',
    },
    {
        id: '6',
        data: { id: 'i2' },
        nodeName: 'libraryInstancesProps',
        entityType: 'instancesProps',
        type: 'create',
    },
    {
        id: '7',
        data: { id: 'w1' },
        nodeName: 'libraryWidgets',
        entityType: 'widgets',
        type: 'create',
    },
    {
        id: '8',
        data: { id: 'w2' },
        nodeName: 'libraryWidgets',
        entityType: 'widgets',
        type: 'create',
    },
];
