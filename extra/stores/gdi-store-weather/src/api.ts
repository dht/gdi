import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    weatherLocations: {
        id: 'weatherLocations',
        connectionType,
    },
    weatherHourlyItems: {
        id: 'weatherHourlyItems',
        connectionType,
    },
    weatherDailyItems: {
        id: 'weatherDailyItems',
        connectionType,
    },
});
