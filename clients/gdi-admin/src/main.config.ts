import { firebaseConfigs } from './main.firebase';
import p from '../package.json';
import { IPlatformConfig } from '@gdi/platformer';
import { getLanguageCode } from '@gdi/language';
import { initializers } from './main.apps';
import { getJson } from 'shared-base';
import { uniq } from 'lodash';

const baseURL = import.meta.env.VITE_API_SERVER_DOMAIN + '/v1';
const menuSections = import.meta.env.VITE_MENU.split(',');
const initialRoute = import.meta.env.VITE_INITIAL_ROUTE; // prettier-ignore

const ACTIVE_APPS_LOCAL_STORAGE_KEY = 'active-apps';

const activeAppsJson = getJson(ACTIVE_APPS_LOCAL_STORAGE_KEY) ?? {};
const activeAppsFromStorage = Object.keys(activeAppsJson).filter(
    (key) => activeAppsJson[key]
);
const requiredApps = ['login', 'mixer', 'settings'];

const activeApps = uniq([...activeAppsFromStorage, ...requiredApps]).sort();

export const config: IPlatformConfig = {
    version: p.version,
    baseURL,
    firebaseConfigs,
    initialRoute,
    initializers,
    activeApps,
    menuSections,
    noServerMode: false,
    languageCode: 'en',
    isRtl: false,
};
