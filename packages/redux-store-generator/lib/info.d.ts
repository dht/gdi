import { ApiInfo, InfoPredicate, Json } from './types/types';
export declare const getNodeActions: (initialState: Json, predicate: InfoPredicate, verb: string) => ApiInfo[];
export declare const get: (obj: any, path: string[], defaultValue: any) => any;
