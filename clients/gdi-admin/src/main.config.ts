import { initApp as initAppMixer } from '@gdi/app-mixer';
import { firebaseConfig } from './main.firebase';
import p from '../package.json';

const baseURL = import.meta.env.VITE_API_SERVER_DOMAIN + '/v1';

export const config = {
    version: p.version,
    baseURL,
    firebaseConfig,
    initialRoute: '/admin/mixer',
    initializers: {
        mixer: initAppMixer,
    },
    activeApps: ['mixer'],
    menuSections: ['site'],
};
