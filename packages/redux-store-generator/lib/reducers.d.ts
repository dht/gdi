import { Action, StoreStructure } from './types/types';
export declare const generateSingle: (nodeName: string) => (state: Record<string, any> | undefined, action: Action) => Record<string, any>;
export declare const generateQueue: (nodeName: string) => (state: Record<string, any>[] | undefined, action: Action) => any;
export declare const generateCollection: (nodeName: string) => (state: Record<string, any> | undefined, action: Action) => any;
export declare const generateGroupedList: (nodeName: string) => (state: Record<string, any> | undefined, action: Action) => any;
export declare const generateReducersForStore: <T extends StoreStructure>(storeState: T) => any;
