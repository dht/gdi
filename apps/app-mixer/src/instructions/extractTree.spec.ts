import { extractTree } from './extractTree';
import { stateOneToMany, stateSimple } from './mixerInstructions.fixtures';

describe('extractTree', () => {
    it('extract widget', () => {
        expect(
            extractTree(
                {
                    source: 'library',
                    destination: 'library',
                    entityType: 'widgets',
                    itemId: 'w1',
                },
                stateSimple
            )
        ).toEqual({
            widgets: {
                w1: {
                    id: 'w1',
                },
            },
        });
    });

    it('extract image', () => {
        expect(
            extractTree(
                {
                    source: 'site',
                    destination: 'site',
                    entityType: 'images',
                    itemId: 'm1',
                },
                stateSimple
            )
        ).toEqual({
            images: {
                m1: {
                    id: 'm1',
                },
            },
        });
    });

    it('extract instancesProps', () => {
        expect(
            extractTree(
                {
                    source: 'site',
                    destination: 'site',
                    entityType: 'instancesProps',
                    itemId: 'i1',
                },
                stateSimple
            )
        ).toEqual({
            instancesProps: {
                i1: {
                    id: 'i1',
                },
            },
        });
    });

    it('extract instances', () => {
        expect(
            extractTree(
                {
                    source: 'site',
                    destination: 'site',
                    entityType: 'instances',
                    itemId: 'i1',
                },
                stateSimple
            )
        ).toEqual({
            instances: {
                i1: {
                    id: 'i1',
                    pageInstanceId: 'v1',
                    widgetId: 'w1',
                },
            },
            instancesProps: { i1: { id: 'i1' } },
        });
    });

    it('extract pageInstance', () => {
        expect(
            extractTree(
                {
                    source: 'site',
                    destination: 'site',
                    entityType: 'pageInstances',
                    itemId: 'v1',
                },
                stateOneToMany
            )
        ).toEqual({
            pageInstances: {
                v1: {
                    id: 'v1',
                    pageId: 'p1',
                },
            },
            instances: {
                i1: {
                    id: 'i1',
                    pageInstanceId: 'v1',
                    widgetId: 'w1',
                },
                i2: {
                    id: 'i2',
                    pageInstanceId: 'v1',
                    widgetId: 'w2',
                },
            },
            instancesProps: {
                i1: {
                    id: 'i1',
                },
                i2: {
                    id: 'i2',
                },
            },
        });
    });

    it('extract page', () => {
        expect(
            extractTree(
                {
                    source: 'site',
                    destination: 'site',
                    entityType: 'pages',
                    itemId: 'p1',
                },
                stateOneToMany
            )
        ).toEqual({
            pages: {
                p1: {
                    id: 'p1',
                    pageInstanceId: 'v1',
                },
            },
            pageInstances: {
                v1: {
                    id: 'v1',
                    pageId: 'p1',
                },
                v2: {
                    id: 'v2',
                    pageId: 'p1',
                },
            },
            instances: {
                i1: {
                    id: 'i1',
                    pageInstanceId: 'v1',
                    widgetId: 'w1',
                },
                i2: {
                    id: 'i2',
                    pageInstanceId: 'v1',
                    widgetId: 'w2',
                },
                i3: {
                    id: 'i3',
                    pageInstanceId: 'v2',
                    widgetId: 'w3',
                },
                i4: {
                    id: 'i4',
                    pageInstanceId: 'v2',
                    widgetId: 'w4',
                },
            },
            instancesProps: {
                i1: {
                    id: 'i1',
                },
                i2: {
                    id: 'i2',
                },
                i3: {
                    id: 'i3',
                },
                i4: {
                    id: 'i4',
                },
            },
        });
    });
});
