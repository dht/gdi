import { CollectionActionTypesBag, GroupedListActionTypesBag, QueueActionTypesBag, SingleActionTypesBag, StoreActionTypes } from './types/types';
import { StoreStructure, ApiInfoPerType } from './types/types';
export declare const single_actionTypes: (nodeName: string) => SingleActionTypesBag;
export declare const queue_actionTypes: (nodeName: string) => QueueActionTypesBag;
export declare const collection_actionTypes: (nodeName: string) => CollectionActionTypesBag;
export declare const groupedList_actionTypes: (nodeName: string) => GroupedListActionTypesBag;
export declare const generateActionTypesForStore: <T extends StoreStructure>(storeState: T) => StoreActionTypes<T>;
export declare const generateActionTypesDictionaryForStore: <T extends StoreStructure>(storeState: T) => ApiInfoPerType;
