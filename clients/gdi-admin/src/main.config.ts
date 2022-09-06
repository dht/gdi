import { initApp as initBiblo } from '@gdi/app-biblo';
import { initApp as initDebDb } from '@gdi/app-debdb';
import { initApp as initDevtools } from '@gdi/app-devtools';
import { initApp as initEvents } from '@gdi/app-events';
import { initApp as initKnowledge } from '@gdi/app-knowledge';
import { initApp as initLogin } from '@gdi/app-login';
import { initApp as initMixer } from '@gdi/app-mixer';
import { initApp as initMoney } from '@gdi/app-money';
import { initApp as initPpl } from '@gdi/app-ppl';
import { initApp as initSoundboard } from '@gdi/app-soundboard';
import { initApp as initSpotify } from '@gdi/app-spotify';
import { initApp as initStudio } from '@gdi/app-studio';
import { initApp as initTasks } from '@gdi/app-tasks';
import { initApp as initThings } from '@gdi/app-things';
import { initApp as initVoice } from '@gdi/app-voice';
import { firebaseConfig } from './main.firebase';
import p from '../package.json';
import { IPlatformConfig } from '@gdi/platformer';

const baseURL = import.meta.env.VITE_API_SERVER_DOMAIN + '/v1';

export const config: IPlatformConfig = {
    version: p.version,
    baseURL,
    firebaseConfig,
    initialRoute: '/admin/devtools/sheets',
    initializers: {
        biblo: initBiblo,
        debDb: initDebDb,
        devtools: initDevtools,
        events: initEvents,
        knowledge: initKnowledge,
        login: initLogin,
        mixer: initMixer,
        money: initMoney,
        ppl: initPpl,
        soundboard: initSoundboard,
        spotify: initSpotify,
        studio: initStudio,
        tasks: initTasks,
        things: initThings,
        voice: initVoice,
    },
    activeApps: [
        'biblo',
        'debDb',
        'devtools',
        'events',
        'knowledge',
        'login',
        'mixer',
        'money',
        'ppl',
        'soundboard',
        // 'spotify',
        'studio',
        'tasks',
        'things',
        'voice',
    ],
    menuSections: ['doing', 'being', 'site', 'space', 'biblo', 'devtools'],
    noServerMode: false,
};
