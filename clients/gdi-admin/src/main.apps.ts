import { initApp as initLogin } from '@gdi/app-login';
import { initApp as initMixer } from '@gdi/app-mixer';
import { initApp as initFactory } from '@gdi/app-factory';
import { initializersExtra } from './extra/main.extra';

export const initializers = {
    login: initLogin,
    mixer: initMixer,
    factory: initFactory,
    ...initializersExtra,
};
