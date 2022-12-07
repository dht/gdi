import type { EndpointsConfigOverrides } from 'redux-connected';
import { ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides: EndpointsConfigOverrides = (
    connectionType: ConnectionType
) => {
    return {
        palette: {
            id: 'palette',
            connectionType,
            optimistic: true,
        },
        fonts: {
            id: 'fonts',
            connectionType,
            optimistic: true,
        },
        instances: {
            id: 'instances',
            connectionType,
            optimistic: true,
        },
        widgets: {
            id: 'widgets',
            connectionType,
            optimistic: true,
        },
        images: {
            id: 'images',
            connectionType,
            optimistic: true,
        },
        instancesProps: {
            id: 'instancesProps',
            connectionType,
            optimistic: true,
        },
        datasets: {
            id: 'datasets',
            connectionType,
            optimistic: true,
        },
        pages: {
            id: 'pages',
            connectionType,
            optimistic: true,
        },
        pageInstances: {
            id: 'pageInstances',
            connectionType,
            optimistic: true,
        },
    };
};
