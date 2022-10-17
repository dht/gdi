// AUTO-GENERATED

import { StoreStructure } from 'redux-store-generator';

export const A14 = {};

declare global {
    export type IVoiceStore = StoreStructure & {
        appStateVoice: IVoiceState;
    };

    export type IVoiceState = {
        stateKey: string;
        isSpeaking: boolean;
        currentSentence: string;
        currentPercent: number;
    };
}
