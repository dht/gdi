import { firebaseConfig } from './main.firebase';
import p from '../package.json';
import { IPlatformConfig } from '@gdi/platformer';
import { initializers } from './main.apps';

const baseURL = import.meta.env.VITE_API_SERVER_DOMAIN + '/v1';
const activeApps = import.meta.env.VITE_FIREBASE_ACTIVE_APPS.split(',');
const menuSections = import.meta.env.VITE_FIREBASE_MENU.split(',');
const initialRoute = import.meta.env.VITE_FIREBASE_INITIAL_ROUTE; // prettier-ignore

export const config: IPlatformConfig = {
    version: p.version,
    baseURL,
    firebaseConfig,
    initialRoute,
    initializers,
    activeApps,
    menuSections,
    noServerMode: false,
};
