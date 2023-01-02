import EndpointsBuilder from './builders/EndpointsBuilder';
import { initExpress } from './utils/express';
import { initFirebase } from './utils/firebase';
import { initService } from './utils/service';
import { config } from 'dotenv-flow';

config();

export const createMockServer = async () => {
    initFirebase();

    const endpointsBuilder = new EndpointsBuilder('/api');

    initService(endpointsBuilder);

    const server = initExpress(endpointsBuilder, {
        port: 3020,
        startListening: true,
        withCors: true,
        debug: true,
    });

    return server;
};

createMockServer();
