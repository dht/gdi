import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    appStateEvents: {
        id: 'appStateEvents',
        connectionType: ConnectionType.NONE,
    },
    events: {
        id: 'events',
        connectionType,
        optimistic: true,
    },
    reminders: {
        id: 'reminders',
        connectionType,
        optimistic: true,
    },
});
