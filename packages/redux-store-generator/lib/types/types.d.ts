export type Json = Record<string, any>;
export type Value = number | boolean | string | null | undefined;
export type Item<T = any> = {
    [fieldName: string]: T;
} & {
    id: string;
};
export type SingleNode = Record<string, any>;
export type CollectionNode = Record<string, Item>;
export type QueueNode = Item[];
export type GroupedList = Item & {
    items: Item[];
};
export type GroupedListNode = Record<string, GroupedList>;
export type StoreNode = SingleNode | QueueNode | CollectionNode | GroupedListNode;
export type StoreStructure = Record<string, StoreNode>;
export declare enum NodeType {
    SINGLE_NODE = "SINGLE_NODE",
    COLLECTION_NODE = "COLLECTION_NODE",
    QUEUE_NODE = "QUEUE_NODE",
    GROUPED_LIST_NODE = "GROUPED_LIST_NODE"
}
export type StoreNodeTypes = Record<string, NodeType>;
export type Action = {
    type: string;
    payload?: Record<string, any>;
    id?: string;
    itemId?: string;
    silent?: boolean;
    echo?: boolean;
    '@@redux-saga/SAGA_ACTION'?: boolean;
    '@@redux-store-generator/AUTO_GENERATED_ACTION'?: boolean;
    '@@redux-connected/CONFIG_ACTION'?: boolean;
    '@@redux-connected/STATUS_ACTION'?: boolean;
    '@@redux-connected/GLOBAL_STATS_ACTION'?: boolean;
    '@@redux-connected/GLOBAL_SETTINGS_ACTION'?: boolean;
    '@@redux-connected/SAGA_ACTION'?: boolean;
    '@@redux-connected/ACTION_ID'?: string;
};
export type ActionCreatorId = (id: string) => Action;
export type ActionCreatorPayload<T extends Json> = (payload: T) => Action;
export type ActionCreatorIdAndPayload<T extends Json> = (id: string, payload: T) => Action;
export type ActionCreatorEmpty = () => Action;
export type ActionCreatorIdAndItemId = (id: string, itemId: string) => Action;
export type ActionCreatorIdAndItemIdAndPayload<T extends Json> = (id: string, itemId: string, payload: T) => Action;
export type SingleBag<T extends Json> = {
    get: ActionCreatorEmpty;
    patch: ActionCreatorPayload<Partial<T>>;
    setAll: ActionCreatorPayload<T>;
};
export type QueueBag<T extends Json> = {
    get: ActionCreatorPayload<Record<string, any>>;
    setAll: ActionCreatorPayload<T[]>;
    push: ActionCreatorPayload<T>;
    pop: ActionCreatorEmpty;
    clear: ActionCreatorEmpty;
    pushMany: ActionCreatorPayload<T[]>;
};
export type CollectionBag<T extends Json> = {
    get: ActionCreatorPayload<Record<string, any>>;
    setAll: ActionCreatorPayload<Record<string, T>>;
    add: ActionCreatorPayload<Partial<T>>;
    set: ActionCreatorIdAndPayload<Partial<T> & {
        id: string;
    }>;
    patch: ActionCreatorIdAndPayload<Partial<T>>;
    delete: ActionCreatorId;
    setMany: ActionCreatorPayload<Record<string, T>>;
};
export type GroupedListBag<T extends Json, V extends Json> = {
    get: ActionCreatorPayload<Record<string, any>>;
    setAll: ActionCreatorPayload<Record<string, T>>;
    add: ActionCreatorPayload<Partial<T>>;
    set: ActionCreatorIdAndPayload<Partial<T> & {
        id: string;
    }>;
    patch: ActionCreatorIdAndPayload<Partial<T>>;
    delete: ActionCreatorId;
    setMany: ActionCreatorPayload<Record<string, T>>;
    getItems: ActionCreatorIdAndPayload<Record<string, any>>;
    setItems: ActionCreatorIdAndPayload<V[]>;
    pushItem: ActionCreatorIdAndPayload<V>;
    popItem: ActionCreatorId;
    deleteItem: ActionCreatorIdAndItemId;
    patchItem: ActionCreatorIdAndItemIdAndPayload<V>;
    clearItems: ActionCreatorId;
    pushManyItems: ActionCreatorIdAndPayload<V[]>;
};
export type ActionBag = SingleBag<any> | QueueBag<any> | CollectionBag<any> | GroupedListBag<any, any>;
type InferArrayType<T> = T extends Array<infer P> ? P : never;
type InferCollectionType<T> = T extends Record<string, infer P> ? P : never;
type InferGroupedListType<T> = T extends Record<string, infer P> ? P : never;
export type StoreActions<StoreStructure> = {
    [K in keyof StoreStructure]: StoreStructure[K] extends QueueNode ? QueueBag<InferArrayType<StoreStructure[K]>> : StoreStructure[K] extends GroupedListNode ? GroupedListBag<InferGroupedListType<StoreStructure[K]>, any> : StoreStructure[K] extends CollectionNode ? CollectionBag<InferCollectionType<StoreStructure[K]>> : SingleBag<StoreStructure[K]>;
};
export type StoreNodesKeys<T> = keyof T;
export type SingleActionTypesBag = {
    get: string;
    patch: string;
    setAll: string;
};
export type QueueActionTypesBag = {
    get: string;
    setAll: string;
    push: string;
    pop: string;
    clear: string;
};
export type CollectionActionTypesBag = {
    get: string;
    setAll: string;
    add: string;
    set: string;
    patch: string;
    delete: string;
};
export type GroupedListActionTypesBag = {
    get: string;
    setAll: string;
    add: string;
    set: string;
    patch: string;
    delete: string;
    getItems: string;
    setItems: string;
    pushItem: string;
    popItem: string;
    deleteItem: string;
    patchItem: string;
    clearItems: string;
    pushManyItems: string;
};
export type ActionTypesBag = SingleActionTypesBag | QueueActionTypesBag | CollectionActionTypesBag | GroupedListActionTypesBag;
export type StoreActionTypes<StoreStructure> = {
    [K in keyof StoreStructure]: StoreStructure[K] extends QueueNode ? QueueActionTypesBag : StoreStructure[K] extends GroupedListNode ? GroupedListNode : StoreStructure[K] extends CollectionNode ? CollectionActionTypesBag : SingleActionTypesBag;
};
export type ApiVerb = 'get' | 'patch' | 'set' | 'setAll' | 'clear' | 'pop' | 'push' | 'pushMany' | 'add' | 'delete' | 'setMany' | 'getItems' | 'setItems' | 'pushItem' | 'patchItem' | 'deleteItem' | 'popItem' | 'clearItems' | 'pushManyItems';
export interface ApiInfo {
    id: string;
    verb: ApiVerb;
    nodeName: string;
    isLocal?: boolean;
    isGet?: boolean;
}
export type ApiInfoPerType = Record<string, ApiInfo>;
export type InfoPredicate = (nodeType: NodeType) => boolean;
export {};
