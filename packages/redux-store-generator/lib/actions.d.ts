import { SingleBag, QueueBag, CollectionBag, StoreActions, StoreStructure, GroupedListBag } from './types/types';
import { Json } from './types/types';
export declare const SIGNATURE: {
    '@@redux-store-generator/AUTO_GENERATED_ACTION': boolean;
};
export declare const single_patchAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const single_setAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const single_getAction: (nodeName: string, extra?: Json) => () => {
    type: string;
};
export declare const single_all: <T extends Json>(nodeName: string, extra?: Json) => SingleBag<T>;
export declare const queue_getAction: (nodeName: string, extra?: Json) => (payload?: Json) => {
    type: string;
    payload: Json;
};
export declare const queue_setAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const queue_pushAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const queue_pushManyAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: {
        items: Json;
    };
};
export declare const queue_popAction: (nodeName: string, extra?: Json) => () => {
    type: string;
};
export declare const queue_clearAction: (nodeName: string, extra?: Json) => () => {
    type: string;
};
export declare const queue_all: <T extends Json>(nodeName: string, extra?: Json) => QueueBag<T>;
export declare const collection_getAction: (nodeName: string, extra?: Json) => (payload?: Json) => {
    type: string;
    payload: Json;
};
export declare const collection_setAllAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const collection_addAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: {
        [x: string]: any;
    };
};
export declare const collection_setAction: (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
    type: string;
    id: string;
    payload: {
        [x: string]: any;
    };
};
export declare const collection_patchAction: (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
    type: string;
    id: string;
    payload: {
        [x: string]: any;
    };
};
export declare const collection_deleteAction: (nodeName: string, extra?: Json) => (id: string) => {
    type: string;
    id: string;
    payload: {};
};
export declare const collection_setManyAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const collection_all: <T extends Json>(nodeName: string, extra?: Json) => CollectionBag<T>;
export declare const groupedList_getAction: (nodeName: string, extra?: Json) => (payload?: Json) => {
    type: string;
    payload: Json;
};
export declare const groupedList_setAllAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const groupedList_addAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: {
        [x: string]: any;
    };
};
export declare const groupedList_setAction: (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
    type: string;
    id: string;
    payload: {
        [x: string]: any;
    };
};
export declare const groupedList_patchAction: (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
    type: string;
    id: string;
    payload: {
        [x: string]: any;
    };
};
export declare const groupedList_deleteAction: (nodeName: string, extra?: Json) => (id: string) => {
    type: string;
    id: string;
    payload: {};
};
export declare const groupedList_setManyAction: (nodeName: string, extra?: Json) => (payload: Json) => {
    type: string;
    payload: Json;
};
export declare const groupedList_getItems: (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
    type: string;
    id: string;
    payload: {
        [x: string]: any;
    };
};
export declare const groupedList_setItems: (nodeName: string, extra?: Json) => (id: string, payload: Json[]) => {
    type: string;
    id: string;
    payload: {
        items: Json[];
    };
};
export declare const groupedList_pushItem: (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
    type: string;
    id: string;
    payload: {
        items: Json[];
    };
};
export declare const groupedList_popItem: (nodeName: string, extra?: Json) => (id: string) => {
    type: string;
    id: string;
    payload: {};
};
export declare const groupedList_deleteItem: (nodeName: string, extra?: Json) => (id: string, itemId: string) => {
    type: string;
    id: string;
    itemId: string;
    payload: {};
};
export declare const groupedList_patchItem: (nodeName: string, extra?: Json) => (id: string, itemId: string, payload: Json) => {
    type: string;
    id: string;
    itemId: string;
    payload: {
        [x: string]: any;
    };
};
export declare const groupedList_clearItems: (nodeName: string, extra?: Json) => (id: string) => {
    type: string;
    id: string;
    payload: {};
};
export declare const groupedList_pushManyItems: (nodeName: string, extra?: Json) => (id: string, payload: Json[]) => {
    type: string;
    id: string;
    payload: {
        items: Json[];
    };
};
export declare const groupedList_all: <T extends Json, V extends Json>(nodeName: string, extra?: Json) => GroupedListBag<T, V>;
export declare const generateActionsForStore: <T extends StoreStructure>(storeState: T) => StoreActions<T>;
