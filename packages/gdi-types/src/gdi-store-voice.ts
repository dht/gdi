// AUTO-GENERATED

import { StoreStructure } from 'redux-store-generator';

export const A17 = {};

declare global {
    export type IVoiceStore = StoreStructure & {
        meta: IGdiMeta;
        appStateVoice: IVoiceState;
    };

    export type IVoiceState = {
        stateKey: string;
        isSpeaking: boolean;
        currentSentence: string;
        currentPercent: number;
    };
}
