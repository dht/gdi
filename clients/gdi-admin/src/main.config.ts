import React from 'react';
import p from '../package.json';
import { ConnectionType } from 'redux-connected';
import { firebaseConfigs } from './main.firebase';
import { getArray } from 'shared-base';
import { getDemoConfig, initDemo, IPlatformConfig } from '@gdi/platformer';
import { initializersApps } from './main.apps';
import { initializersServices } from './main.services';
import { initLanguage } from '@gdi/language';

const baseURL = import.meta.env.VITE_API_SERVER_DOMAIN + '/v1';
const menuSections = import.meta.env.VITE_MENU.split(',');
const initialRoute = import.meta.env.VITE_INITIAL_ROUTE; // prettier-ignore
const demoActiveApps = (import.meta.env.VITE_DEMO_ACTIVE_APPS ?? "").split(','); // prettier-ignore
const demoActiveServices = (import.meta.env.VITE_DEMO_ACTIVE_SERVICES ?? "").split(','); // prettier-ignore
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID_1 ?? ""; // prettier-ignore
const demoDataUrl = import.meta.env.VITE_DEMO_DATA_URL ?? ""; // prettier-ignore

initDemo(projectId, demoDataUrl);
const demoConfig = getDemoConfig();

const ACTIVE_APPS_LOCAL_STORAGE_KEY = 'active-apps';
const ACTIVE_SERVICES_LOCAL_STORAGE_KEY = 'active-services';

const requiredApps = ['login', 'mixer', 'settings'];
let activeApps = getArray(ACTIVE_APPS_LOCAL_STORAGE_KEY, requiredApps);

const requiredServices = ['googleSync', 'guidance', 'freelancers', 'levelUp'];
let activeSaps = getArray(ACTIVE_SERVICES_LOCAL_STORAGE_KEY, requiredServices); // prettier-ignore

if (demoConfig.on) {
    activeApps = demoActiveApps;
    activeSaps = demoActiveServices;
}

const languageCode = initLanguage();

const connectionType = demoConfig.on
    ? ConnectionType.LOCAL_STORAGE
    : ConnectionType.FIRESTORE;

const initializers = {
    ...initializersApps,
    ...initializersServices,
};

export const config: IPlatformConfig = {
    version: p.version,
    baseURL,
    firebaseConfigs,
    initialRoute,
    initializers,
    activeApps,
    activeSaps,
    menuSections,
    languageCode,
    isRtl: languageCode === 'he',
    connectionType,
};
