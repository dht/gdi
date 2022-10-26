import { generateReducersForStore } from 'redux-store-generator';
import { IVoiceStore } from './types';

export const initialState: IVoiceStore = {
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
