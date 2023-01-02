import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateGoogleSync: {
        id: 'appStateGoogleSync',
        connectionType: ConnectionType.NONE,
    },
    interestingReads: {
        id: 'interestingReads',
        connectionType,
        optimistic: true,
    },
    readCategories: {
        id: 'readCategories',
        connectionType,
        optimistic: true,
    },
    metaphors: {
        id: 'readCategories',
        connectionType,
        optimistic: true,
    },
});
