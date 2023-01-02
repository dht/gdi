import { bmsFeatures } from './endpoints/endpoints.bmsFeatures';
import { businessDomains } from './endpoints/endpoints.businessDomains';
import { rankings } from './endpoints/endpoints.rankings';
import { requirements } from './endpoints/endpoints.requirements';
import {
    EndpointsBuilder,
    initExpress,
    initFirebase,
    initService,
} from '@gdi/service-base';
import admin from 'firebase-admin';
import { config } from 'dotenv-flow';

config();

const serviceAccount = require('../config/serviceAccountKey.json');

initFirebase({
    credential: admin.credential.cert(serviceAccount),
});

const endpointsBuilder = new EndpointsBuilder('/api');

endpointsBuilder.withRouters({
    '/bmsFeatures': bmsFeatures,
    '/businessDomains': businessDomains,
    '/rankings': rankings,
    '/requirements': requirements,
});

initService(endpointsBuilder);

initExpress(endpointsBuilder, {
    withCors: true,
    startListening: true,
    port: 3020,
    debug: true,
});
