import { initApp as initLogin } from '@gdi/app-login';
import { initApp as initMixer } from '@gdi/app-mixer';
import { initApp as initBiblo } from '@gdi/app-biblo';
import { initApp as initDebdb } from '@gdi/app-debdb';
import { initApp as initDevtools } from '@gdi/app-devtools';
import { initApp as initEvents } from '@gdi/app-events';
import { initApp as initKnowledge } from '@gdi/app-knowledge';
import { initApp as initMoney } from '@gdi/app-money';
import { initApp as initPpl } from '@gdi/app-ppl';
import { initApp as initSoundboard } from '@gdi/app-soundboard';
import { initApp as initSpotify } from '@gdi/app-spotify';
import { initApp as initStudio } from '@gdi/app-studio';
import { initApp as initTasks } from '@gdi/app-tasks';
import { initApp as initThings } from '@gdi/app-things';
import { initApp as initVoice } from '@gdi/app-voice';

export const initializers = {
    login: initLogin,
	mixer: initMixer,
	biblo: initBiblo,
	debdb: initDebdb,
	devtools: initDevtools,
	events: initEvents,
	knowledge: initKnowledge,
	money: initMoney,
	ppl: initPpl,
	soundboard: initSoundboard,
	spotify: initSpotify,
	studio: initStudio,
	tasks: initTasks,
	things: initThings,
	voice: initVoice
};
