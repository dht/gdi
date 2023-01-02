import EndpointsBuilder from './builders/EndpointsBuilder';
import { initExpress } from './utils/express';
import { initService } from './utils/service';

export { EndpointsBuilder } from './builders/EndpointsBuilder';
export { initExpress } from './utils/express';
export { initFirebase, firebase } from './utils/firebase';
export { initService } from './utils/service';

export { acl } from './decorators/acl';
export { validateParameters } from './decorators/validateParameters';
export { i18n } from './decorators/i18n';
export type { IEndpointSchema } from './types';

export const createMockServer = () => {
    const endpointsBuilder = new EndpointsBuilder('/api');

    initService(endpointsBuilder);

    const server = initExpress(endpointsBuilder, {
        withCors: true,
        startListening: true,
        port: 0,
    });

    return server;
};
