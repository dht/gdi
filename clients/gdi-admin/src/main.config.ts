import React from 'react';
import p from '../package.json';
import { ConnectionType } from 'redux-connected';
import { firebaseConfigs } from './main.firebase';
import { getDemoConfig, initDemo, IPlatformConfig } from '@gdi/platformer';
import { getJson, uniq } from 'shared-base';
import { initializers } from './main.apps';
import { initLanguage } from '@gdi/language';

const baseURL = import.meta.env.VITE_API_SERVER_DOMAIN + '/v1';
const menuSections = import.meta.env.VITE_MENU.split(',');
const initialRoute = import.meta.env.VITE_INITIAL_ROUTE; // prettier-ignore
const demoActiveApps = (import.meta.env.VITE_DEMO_ACTIVE_APPS ?? "").split(','); // prettier-ignore
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID_1 ?? ""; // prettier-ignore
const demoDataUrl = import.meta.env.VITE_DEMO_DATA_URL ?? ""; // prettier-ignore

initDemo(projectId, demoDataUrl);
const demoConfig = getDemoConfig();

const ACTIVE_APPS_LOCAL_STORAGE_KEY = 'active-apps';

const activeAppsJson = getJson(ACTIVE_APPS_LOCAL_STORAGE_KEY) ?? {};
const activeAppsFromStorage = Object.keys(activeAppsJson).filter(
    (key) => activeAppsJson[key]
);
const requiredApps = ['login', 'mixer', 'settings'];

let activeApps = uniq([...activeAppsFromStorage, ...requiredApps]).sort();

if (demoConfig.on) {
    activeApps = demoActiveApps;
}

const languageCode: LanguageIso = initLanguage();

const connectionType = demoConfig.on
    ? ConnectionType.LOCAL_STORAGE
    : ConnectionType.FIRESTORE;

export const config: IPlatformConfig = {
    version: p.version,
    baseURL,
    firebaseConfigs,
    initialRoute,
    initializers,
    activeApps,
    menuSections,
    languageCode,
    isRtl: languageCode === 'he',
    connectionType,
};
