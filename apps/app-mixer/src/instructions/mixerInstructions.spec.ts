import { IMixerRequest } from '../types';
import { instructionsToActions, parseMixerRequest } from './mixerInstructions';
import { stateEmpty, stateOneToMany } from './mixerInstructions.fixtures';

describe('mixerInstructions ', () => {
    it('empty state returns no instructions', () => {
        expect(
            parseMixerRequest(
                {
                    source: 'json',
                    destination: 'json',
                    entityType: 'pages',
                },
                stateEmpty
            )
        ).toEqual([]);
    });

    it('detached import from JSON', () => {
        expect(
            parseMixerRequest(
                {
                    source: 'json',
                    destination: 'library',
                    data: {
                        images: {
                            m2: {
                                id: 'm2',
                            },
                        },
                    },
                },
                stateEmpty
            )
        ).toEqual([
            {
                id: '1',
                type: 'create',
                nodeName: 'libraryImages',
                entityType: 'images',
                data: {
                    id: 'm2',
                },
            },
        ]);
    });

    it('graph import from JSON', () => {
        expect(
            parseMixerRequest(
                {
                    source: 'json',
                    destination: 'library',
                    data: {
                        pages: {
                            p2: {
                                id: 'p2',
                            },
                        },
                        pageInstances: {
                            v2: {
                                id: 'v2',
                                pageId: 'p2',
                            },
                        },
                        instances: {
                            i2: {
                                id: 'i2',
                                pageInstanceId: 'v2',
                            },
                        },
                        instancesProps: {
                            i2: {
                                id: 'i2',
                            },
                        },
                    },
                },
                stateEmpty
            )
        ).toEqual([
            {
                id: '1',
                type: 'create',
                nodeName: 'libraryPages',
                entityType: 'pages',
                data: {
                    id: 'p2',
                },
            },
            {
                id: '2',
                type: 'create',
                nodeName: 'libraryPageInstances',
                entityType: 'pageInstances',
                data: {
                    id: 'v2',
                    pageId: 'p2',
                },
            },
            {
                id: '3',
                type: 'create',
                nodeName: 'libraryInstances',
                entityType: 'instances',
                data: {
                    id: 'i2',
                    pageInstanceId: 'v2',
                },
            },
            {
                id: '4',
                type: 'create',
                nodeName: 'libraryInstancesProps',
                entityType: 'instancesProps',
                data: {
                    id: 'i2',
                },
            },
        ]);
    });

    it('duplicate libraryPage', () => {
        expect(
            parseMixerRequest(
                {
                    source: 'library',
                    destination: 'library',
                    entityType: 'pages',
                    itemId: 'p1',
                },
                stateOneToMany
            )
        ).toEqual([
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
        ]);
    });

    it('promote to site', () => {
        expect(
            parseMixerRequest(
                {
                    source: 'site',
                    destination: 'library',
                    entityType: 'pages',
                    itemId: 'p1',
                },
                stateOneToMany,
                true
            )
        ).toEqual([
            {
                data: { id: 'p1', pageInstanceId: 'v1' },
                entityType: 'pages',
                id: '1',
                nodeName: 'libraryPages',
                type: 'create',
            },
            {
                data: { id: 'v1', pageId: 'p1' },
                entityType: 'pageInstances',
                id: '2',
                nodeName: 'libraryPageInstances',
                type: 'create',
            },
            {
                data: { id: 'v2', pageId: 'p1' },
                entityType: 'pageInstances',
                id: '3',
                nodeName: 'libraryPageInstances',
                type: 'create',
            },
            {
                data: { id: 'i1', pageInstanceId: 'v1', widgetId: 'w1' },
                entityType: 'instances',
                id: '4',
                nodeName: 'libraryInstances',
                type: 'create',
            },
            {
                data: { id: 'i2', pageInstanceId: 'v1', widgetId: 'w2' },
                entityType: 'instances',
                id: '5',
                nodeName: 'libraryInstances',
                type: 'create',
            },
            {
                data: { id: 'i3', pageInstanceId: 'v2', widgetId: 'w3' },
                entityType: 'instances',
                id: '6',
                nodeName: 'libraryInstances',
                type: 'create',
            },
            {
                data: { id: 'i4', pageInstanceId: 'v2', widgetId: 'w4' },
                entityType: 'instances',
                id: '7',
                nodeName: 'libraryInstances',
                type: 'create',
            },
            {
                data: { id: 'i1' },
                entityType: 'instancesProps',
                id: '8',
                nodeName: 'libraryInstancesProps',
                type: 'create',
            },
            {
                data: { id: 'i2' },
                entityType: 'instancesProps',
                id: '9',
                nodeName: 'libraryInstancesProps',
                type: 'create',
            },
            {
                data: { id: 'i3' },
                entityType: 'instancesProps',
                id: '10',
                nodeName: 'libraryInstancesProps',
                type: 'create',
            },
            {
                data: { id: 'i4' },
                entityType: 'instancesProps',
                id: '11',
                nodeName: 'libraryInstancesProps',
                type: 'create',
            },
            {
                data: { id: 'w1' },
                entityType: 'widgets',
                id: '12',
                nodeName: 'libraryWidgets',
                type: 'create',
            },
            {
                data: { id: 'w2' },
                entityType: 'widgets',
                id: '13',
                nodeName: 'libraryWidgets',
                type: 'create',
            },
            {
                data: { id: 'w3' },
                entityType: 'widgets',
                id: '14',
                nodeName: 'libraryWidgets',
                type: 'create',
            },
            {
                data: { id: 'w4' },
                entityType: 'widgets',
                id: '15',
                nodeName: 'libraryWidgets',
                type: 'create',
            },
        ]);
    });
});

describe('instructionsToActions', () => {
    it('instructionsToActions', () => {
        expect(
            instructionsToActions([
                {
                    data: { id: 'p1', pageInstanceId: 'v1' },
                    entityType: 'pages',
                    id: '1',
                    nodeName: 'libraryPages',
                    type: 'create',
                },
                {
                    data: { id: 'v1', pageId: 'p1' },
                    entityType: 'pageInstances',
                    id: '2',
                    nodeName: 'libraryPageInstances',
                    type: 'create',
                },
                {
                    data: { id: 'v2', pageId: 'p1' },
                    entityType: 'pageInstances',
                    id: '3',
                    nodeName: 'libraryPageInstances',
                    type: 'create',
                },
                {
                    data: { id: 'i1', pageInstanceId: 'v1', widgetId: 'w1' },
                    entityType: 'instances',
                    id: '4',
                    nodeName: 'libraryInstances',
                    type: 'create',
                },
                {
                    data: { id: 'i2', pageInstanceId: 'v1', widgetId: 'w2' },
                    entityType: 'instances',
                    id: '5',
                    nodeName: 'libraryInstances',
                    type: 'create',
                },
                {
                    data: { id: 'i3', pageInstanceId: 'v2', widgetId: 'w3' },
                    entityType: 'instances',
                    id: '6',
                    nodeName: 'libraryInstances',
                    type: 'create',
                },
                {
                    data: { id: 'i4', pageInstanceId: 'v2', widgetId: 'w4' },
                    entityType: 'instances',
                    id: '7',
                    nodeName: 'libraryInstances',
                    type: 'create',
                },
                {
                    data: { id: 'i1' },
                    entityType: 'instancesProps',
                    id: '8',
                    nodeName: 'libraryInstancesProps',
                    type: 'create',
                },
                {
                    data: { id: 'i2' },
                    entityType: 'instancesProps',
                    id: '9',
                    nodeName: 'libraryInstancesProps',
                    type: 'create',
                },
                {
                    data: { id: 'i3' },
                    entityType: 'instancesProps',
                    id: '10',
                    nodeName: 'libraryInstancesProps',
                    type: 'create',
                },
                {
                    data: { id: 'i4' },
                    entityType: 'instancesProps',
                    id: '11',
                    nodeName: 'libraryInstancesProps',
                    type: 'create',
                },
                {
                    data: { id: 'w1' },
                    entityType: 'widgets',
                    id: '12',
                    nodeName: 'libraryWidgets',
                    type: 'create',
                },
                {
                    data: { id: 'w2' },
                    entityType: 'widgets',
                    id: '13',
                    nodeName: 'libraryWidgets',
                    type: 'create',
                },
                {
                    data: { id: 'w3' },
                    entityType: 'widgets',
                    id: '14',
                    nodeName: 'libraryWidgets',
                    type: 'create',
                },
                {
                    data: { id: 'w4' },
                    entityType: 'widgets',
                    id: '15',
                    nodeName: 'libraryWidgets',
                    type: 'create',
                },
            ])
        ).toEqual([
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'p1', pageInstanceId: 'v1' },
                type: 'ADD_LIBRARYPAG',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'v1', pageId: 'p1' },
                type: 'ADD_LIBRARYPAGEINSTANC',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'v2', pageId: 'p1' },
                type: 'ADD_LIBRARYPAGEINSTANC',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i1', pageInstanceId: 'v1', widgetId: 'w1' },
                type: 'ADD_LIBRARYINSTANC',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i2', pageInstanceId: 'v1', widgetId: 'w2' },
                type: 'ADD_LIBRARYINSTANC',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i3', pageInstanceId: 'v2', widgetId: 'w3' },
                type: 'ADD_LIBRARYINSTANC',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i4', pageInstanceId: 'v2', widgetId: 'w4' },
                type: 'ADD_LIBRARYINSTANC',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i1' },
                type: 'ADD_LIBRARYINSTANCESPROP',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i2' },
                type: 'ADD_LIBRARYINSTANCESPROP',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i3' },
                type: 'ADD_LIBRARYINSTANCESPROP',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'i4' },
                type: 'ADD_LIBRARYINSTANCESPROP',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'w1' },
                type: 'ADD_LIBRARYWIDGET',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'w2' },
                type: 'ADD_LIBRARYWIDGET',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'w3' },
                type: 'ADD_LIBRARYWIDGET',
            },
            {
                '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
                payload: { id: 'w4' },
                type: 'ADD_LIBRARYWIDGET',
            },
        ]);
    });
});
