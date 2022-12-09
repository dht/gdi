import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateVoice: {
        id: 'appStateVoice',
        connectionType,
        optimistic: true,
    },
});
