export enum ConnectionType {
    NONE = 'NONE',
    REST = 'REST',
    FIRESTORE = 'FIRESTORE',
    LOCAL_STORAGE = 'LOCAL_STORAGE',
}

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
