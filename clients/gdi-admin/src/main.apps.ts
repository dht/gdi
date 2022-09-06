import { initApp as initLogin } from '@gdi/app-login';
import { initApp as initMixer } from '@gdi/app-mixer';
import { initializersExtra } from './extra/main.extra';

export const initializers = {
    login: initLogin,
    mixer: initMixer,
    ...initializersExtra,
};
