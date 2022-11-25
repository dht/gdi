import { generateReducersForStore } from 'redux-store-generator';
import { IVoiceStore } from './types';
import p from '../package.json';

export const initialState: IVoiceStore = {
    meta: {
        version: p.version,
        description: p.description,
        isBeta: p.gdi.isBeta,
        isDraft: p.gdi.isDraft,
        packageType: p.gdi.packageType as GdiEntity,
    },
    appStateVoice: {
        stateKey: 'voice',
        isSpeaking: false,
        currentSentence: 'What is the temperature for tomorrow?',
        currentPercent: 94.24,
    },
};

export const reducers = generateReducersForStore<IVoiceStore>(initialState);

export const clearState = (store: any) => {
    return store;
};
