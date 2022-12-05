import { EndpointsConfigOverrides, ConnectionType } from 'redux-connected';

export const endpointsConfigOverrides = (
    connectionType: ConnectionType
): EndpointsConfigOverrides => ({
    studioBoards: {
        id: 'studioBoards',
        connectionType,
    },
    studioCameras: {
        id: 'studioCameras',
        connectionType,
    },
    studioGrounds: {
        id: 'studioGrounds',
        connectionType,
    },
    studioExternals: {
        id: 'studioExternals',
        connectionType,
    },
    studioLights: {
        id: 'studioLights',
        connectionType,
    },
    studioMicroAnimations: {
        id: 'studioMicroAnimations',
        connectionType,
    },
    studioPacks: {
        id: 'studioPacks',
        connectionType,
    },
    studioParticles: {
        id: 'studioParticles',
        connectionType,
    },
    studioSounds: {
        id: 'studioSounds',
        connectionType,
    },
    studioSprites: {
        id: 'studioSprites',
        connectionType,
    },
    studioVideos: {
        id: 'studioVideos',
        connectionType,
    },
});
