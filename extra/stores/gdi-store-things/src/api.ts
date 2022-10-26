export const endpointsConfigOverrides = {
    appStateThings: {
        id: 'appStateThings',
        connectionType: 'NONE',
    },
    things: {
        id: 'things',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
