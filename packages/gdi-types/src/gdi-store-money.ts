// AUTO-GENERATED

import type { StoreStructure } from 'redux-store-generator';

export const A10 = {};

declare global {
    export type IMoneyState = {
        stateKey: string;
        currentCategory: string;
        inflationBehavior?: string;
    };

    export type IMoneyLine = {
        id: string;
        category: string;
        topic: string;
        sum: number;
        date?: string;
        behavior?: string;
        tags: string[];
        dataTags: string[];
    };

    export type IMoneyBehavior = {
        id: string;
        key: string;
        formula: string;
    };

    export type IMoneyLines = Record<string, IMoneyLine>;
    export type IMoneyBehaviors = Record<string, IMoneyBehavior>;

    export type IMoneyStore = StoreStructure & {
        meta: IGdiMeta;
        appStateMoney: IMoneyState;
        moneyLines: IMoneyLines;
        moneyBehaviors: IMoneyBehaviors;
    };
}
