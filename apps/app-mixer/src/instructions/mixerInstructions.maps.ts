import { Entity, SourceDestination } from '../types';

export const nodeNames: Record<
    SourceDestination,
    Partial<Record<Entity, string>>
> = {
    site: {
        pages: 'pages',
        pageInstances: 'pageInstances',
        instances: 'instances',
        instancesProps: 'instancesProps',
        widgets: 'widgets',
        images: 'images',
    },
    library: {
        pages: 'libraryPages',
        pageInstances: 'libraryPageInstances',
        instances: 'libraryInstances',
        instancesProps: 'libraryInstancesProps',
        widgets: 'libraryWidgets',
        images: 'libraryImages',
    },
    json: {},
    template: {},
};

export const selectors = {
    site: {
        image: (state: ISiteStore) => state.images,
        instance: (state: ISiteStore) => state.instances,
        instancesProps: (state: ISiteStore) => state.instancesProps,
        page: (state: ISiteStore) => state.pages,
        pageInstance: (state: ISiteStore) => state.pageInstances,
        widget: (state: ISiteStore) => state.widgets,
    },
    library: {
        image: (state: IMixerStore) => state.libraryImages,
        instance: (state: IMixerStore) => state.libraryInstances,
        instancesProps: (state: IMixerStore) => state.libraryInstancesProps,
        page: (state: IMixerStore) => state.libraryPages,
        pageInstance: (state: IMixerStore) => state.libraryPageInstances,
        widget: (state: IMixerStore) => state.libraryWidgets,
    },
};
