export const endpointsConfigOverrides: any = {
    users: {
        id: 'users',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    roles: {
        id: 'roles',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
