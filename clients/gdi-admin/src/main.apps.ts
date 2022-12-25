import { initApp as initLogin } from '@gdi/app-login';
import { initApp as initMixer } from '@gdi/app-mixer';
import { initApp as initFactory } from '@gdi/app-factory';
import { initApp as initSettings } from '@gdi/app-settings';
import { initApp as initDashboard } from '@gdi/app-dashboard';
import { initializersExtra } from './extra/main.extra';

export const initializersApps = {
    login: initLogin,
    mixer: initMixer,
    factory: initFactory,
    settings: initSettings,
    dashboard: initDashboard,
    ...initializersExtra,
};
