export const stateEmpty = {
    pages: {},
    pageInstances: {},
    instances: {},
    instancesProps: {},
    widgets: {},
    images: {},
};

export const stateSimple = {
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
    },
    instances: {
        i1: {
            id: 'i1',
            pageInstanceId: 'v1',
            widgetId: 'w1',
        },
    },
    instancesProps: {
        i1: {
            id: 'i1',
        },
    },
    widgets: {
        w1: {
            id: 'w1',
        },
    },
    images: {
        m1: {
            id: 'm1',
        },
    },
    libraryPages: {
        p1: {
            id: 'p1',
            pageInstanceId: 'v1',
        },
    },
    libraryPageInstances: {
        v1: {
            id: 'v1',
            pageId: 'p1',
        },
    },
    libraryInstances: {
        i1: {
            id: 'i1',
            pageInstanceId: 'v1',
        },
    },
    libraryInstancesProps: {
        i1: {
            id: 'i1',
        },
    },
    libraryWidgets: {
        w1: {
            id: 'w1',
        },
    },
    libraryImages: {
        m1: {
            id: 'm1',
        },
    },
};

export const stateOneToMany = {
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
    widgets: {
        w1: {
            id: 'w1',
        },
        w2: {
            id: 'w2',
        },
        w3: {
            id: 'w3',
        },
        w4: {
            id: 'w4',
        },
    },
    images: {
        m1: {
            id: 'm1',
        },
        m2: {
            id: 'm2',
        },
    },
    libraryPages: {
        p1: {
            id: 'p1',
            pageInstanceId: 'v1',
        },
    },
    libraryPageInstances: {
        v1: {
            id: 'v1',
            pageId: 'p1',
        },
    },
    libraryInstances: {
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
    libraryInstancesProps: {
        i1: {
            id: 'i1',
        },
        i2: {
            id: 'i2',
        },
    },
    libraryWidgets: {
        w1: {
            id: 'w1',
        },
        w2: {
            id: 'w2',
        },
    },
    libraryImages: {
        m1: {
            id: 'm1',
        },
        m2: {
            id: 'm1',
        },
    },
};
