export const endpointsConfigOverrides = {
    appStateComments: {
        id: 'appStateComments',
        connectionType: 'NONE',
    },
    comments: {
        id: 'comments',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
