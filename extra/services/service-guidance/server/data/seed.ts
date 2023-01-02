import admin from 'firebase-admin';
import dataBmsFeatures from '../data/bmsFeatures';
import dataBusinessDomains from '../data/businessDomains';
import kleur from 'kleur';
import { config } from 'dotenv-flow';
import { firebase, initFirebase } from '@gdi/service-base';
import * as itemsOrders from './order';

config();

const serviceAccount = require('../config/serviceAccountKey.json');

initFirebase({
    credential: admin.credential.cert(serviceAccount),
});

const seedCollection = async (collectionId: string, data: any) => {
    console.time(`seeding ${kleur.cyan(collectionId)}`);

    const languages = Object.keys(data);

    const source = data['en'];

    const featureKeys = Object.keys(source).filter(
        (key) => !key.match(/Description$/)
    );

    const items: any[] = [];

    for (let featureKey of featureKeys) {
        for (let language of languages) {
            const title = (data as any)[language][featureKey];
            const description = (data as any)[language][
                `${featureKey}Description`
            ];

            const order =
                (itemsOrders as any)[collectionId].indexOf(featureKey) + 1;

            const item = {
                id: featureKey,
                key: `${language}_${featureKey}`,
                title,
                description,
                language,
                order,
            };

            items.push(item);
        }
    }

    const promises = items.map((item) => {
        return firebase.collection(collectionId).patch(item.key, item);
    });

    await Promise.all(promises);
    console.timeEnd(`seeding ${kleur.cyan(collectionId)}`);
};

const run = async () => {
    await seedCollection('bmsFeatures', dataBmsFeatures);
    await seedCollection('businessDomains', dataBusinessDomains);
};

run();
