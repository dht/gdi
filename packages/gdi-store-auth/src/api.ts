export const endpointsConfigOverrides: any = {
    users: {
        id: 'users',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
    admins: {
        id: 'admins',
        connectionType: 'FIRESTORE',
        optimistic: true,
    },
};
