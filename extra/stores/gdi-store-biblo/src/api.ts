export const endpointsConfigOverrides = (connectionType: ConnectionType) => ({
    appStateBiblo: {
        id: 'appStateBiblo',
        connectionType: 'NONE',
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
