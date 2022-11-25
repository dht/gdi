export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
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
