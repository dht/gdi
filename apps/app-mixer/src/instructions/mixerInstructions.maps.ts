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
        image: (state) => state.images,
        instance: (state) => state.instances,
        instancesProps: (state) => state.instancesProps,
        page: (state) => state.pages,
        pageInstance: (state) => state.pageInstances,
        widget: (state) => state.widgets,
    },
    library: {
        image: (state) => state.libraryImages,
        instance: (state) => state.libraryInstances,
        instancesProps: (state) => state.libraryInstancesProps,
        page: (state) => state.libraryPages,
        pageInstance: (state) => state.libraryPageInstances,
        widget: (state) => state.libraryWidgets,
    },
};
