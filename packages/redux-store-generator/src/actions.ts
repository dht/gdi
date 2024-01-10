import {
    NodeType,
    SingleBag,
    QueueBag,
    CollectionBag,
    StoreActions,
    StoreNode,
    StoreStructure,
    GroupedListBag,
} from './types/types';
import { toSingularAction } from './singular';
import { Json } from './types/types';
import { nodeToType } from './structure';

export const SIGNATURE = {
    '@@redux-store-generator/AUTO_GENERATED_ACTION': true,
};

// ============== single ==============
export const single_patchAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `PATCH_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const single_setAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `SET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const single_getAction = (nodeName: string, extra?: Json) => () => {
    return {
        type: `GET_${nodeName.toUpperCase()}`,
        ...extra,
    };
};

export const single_all = <T extends Json>(
    nodeName: string,
    extra?: Json
): SingleBag<T> => {
    return {
        get: single_getAction(nodeName, extra),
        setAll: single_setAction(nodeName, extra),
        patch: single_patchAction(nodeName, extra),
    };
};

// ============== queue ==============
export const queue_getAction =
    (nodeName: string, extra?: Json) =>
    (payload: Json = {}) => {
        return {
            type: `GET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const queue_setAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `SET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const queue_pushAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `PUSH_${toSingularAction(nodeName)}`,
            payload,
            ...extra,
        };
    };

export const queue_pushManyAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `PUSH_MANY_${nodeName.toUpperCase()}`,
            payload: {
                items: payload,
            },
            ...extra,
        };
    };

export const queue_popAction = (nodeName: string, extra?: Json) => () => {
    return {
        type: `POP_${toSingularAction(nodeName)}`,
        ...extra,
    };
};

export const queue_clearAction = (nodeName: string, extra?: Json) => () => {
    return {
        type: `CLEAR_${nodeName.toUpperCase()}`,
        ...extra,
    };
};

export const queue_all = <T extends Json>(
    nodeName: string,
    extra?: Json
): QueueBag<T> => {
    return {
        get: queue_getAction(nodeName, extra),
        setAll: queue_setAction(nodeName, extra),
        push: queue_pushAction(nodeName, extra),
        pop: queue_popAction(nodeName, extra),
        clear: queue_clearAction(nodeName, extra),
        pushMany: queue_pushManyAction(nodeName, extra),
    };
};

// ============== collection ==============
export const collection_getAction =
    (nodeName: string, extra?: Json) =>
    (payload: Json = {}) => {
        return {
            type: `GET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const collection_setAllAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `SET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const collection_addAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `ADD_${toSingularAction(nodeName)}`,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const collection_setAction =
    (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
        return {
            type: `SET_${toSingularAction(nodeName)}`,
            id,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const collection_patchAction =
    (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
        return {
            type: `PATCH_${toSingularAction(nodeName)}`,
            id,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const collection_deleteAction =
    (nodeName: string, extra?: Json) => (id: string) => {
        return {
            type: `DELETE_${toSingularAction(nodeName)}`,
            id,
            payload: {},
            ...extra,
        };
    };

export const collection_setManyAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `SET_MANY_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const collection_all = <T extends Json>(
    nodeName: string,
    extra?: Json
): CollectionBag<T> => {
    return {
        get: collection_getAction(nodeName, extra),
        setAll: collection_setAllAction(nodeName, extra),
        set: collection_setAction(nodeName, extra),
        add: collection_addAction(nodeName, extra),
        patch: collection_patchAction(nodeName, extra),
        delete: collection_deleteAction(nodeName, extra),
        setMany: collection_setManyAction(nodeName, extra),
    };
};

// ============== grouped list ==============
export const groupedList_getAction =
    (nodeName: string, extra?: Json) =>
    (payload: Json = {}) => {
        return {
            type: `GET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const groupedList_setAllAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `SET_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const groupedList_addAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `ADD_${toSingularAction(nodeName)}`,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const groupedList_setAction =
    (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
        return {
            type: `SET_${toSingularAction(nodeName)}`,
            id,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const groupedList_patchAction =
    (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
        return {
            type: `PATCH_${toSingularAction(nodeName)}`,
            id,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const groupedList_deleteAction =
    (nodeName: string, extra?: Json) => (id: string) => {
        return {
            type: `DELETE_${toSingularAction(nodeName)}`,
            id,
            payload: {},
            ...extra,
        };
    };

export const groupedList_setManyAction =
    (nodeName: string, extra?: Json) => (payload: Json) => {
        return {
            type: `SET_MANY_${nodeName.toUpperCase()}`,
            payload,
            ...extra,
        };
    };

export const groupedList_getItems =
    (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
        return {
            type: `GET_${nodeName.toUpperCase()}_ITEMS`,
            id,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const groupedList_setItems =
    (nodeName: string, extra?: Json) => (id: string, payload: Json[]) => {
        return {
            type: `SET_${nodeName.toUpperCase()}_ITEMS`,
            id,
            payload: {
                items: payload,
            },
            ...extra,
        };
    };

export const groupedList_pushItem =
    (nodeName: string, extra?: Json) => (id: string, payload: Json) => {
        return {
            type: `PUSH_${nodeName.toUpperCase()}_ITEM`,
            id,
            payload: {
                items: [payload],
            },
            ...extra,
        };
    };

export const groupedList_popItem =
    (nodeName: string, extra?: Json) => (id: string) => {
        return {
            type: `POP_${nodeName.toUpperCase()}_ITEM`,
            id,
            payload: {},
            ...extra,
        };
    };

export const groupedList_deleteItem =
    (nodeName: string, extra?: Json) => (id: string, itemId: string) => {
        return {
            type: `DELETE_${nodeName.toUpperCase()}_ITEM`,
            id,
            itemId,
            payload: {},
            ...extra,
        };
    };

export const groupedList_patchItem =
    (nodeName: string, extra?: Json) =>
    (id: string, itemId: string, payload: Json) => {
        return {
            type: `PATCH_${nodeName.toUpperCase()}_ITEM`,
            id,
            itemId,
            payload: {
                ...payload,
            },
            ...extra,
        };
    };

export const groupedList_clearItems =
    (nodeName: string, extra?: Json) => (id: string) => {
        return {
            type: `CLEAR_${nodeName.toUpperCase()}_ITEMS`,
            id,
            payload: {},
            ...extra,
        };
    };

export const groupedList_pushManyItems =
    (nodeName: string, extra?: Json) => (id: string, payload: Json[]) => {
        return {
            type: `PUSH_MANY_${nodeName.toUpperCase()}_ITEMS`,
            id,
            payload: {
                items: payload,
            },
            ...extra,
        };
    };

export const groupedList_all = <T extends Json, V extends Json>(
    nodeName: string,
    extra?: Json
): GroupedListBag<T, V> => {
    return {
        get: groupedList_getAction(nodeName, extra),
        setAll: groupedList_setAllAction(nodeName, extra),
        set: groupedList_setAction(nodeName, extra),
        add: groupedList_addAction(nodeName, extra),
        patch: groupedList_patchAction(nodeName, extra),
        delete: groupedList_deleteAction(nodeName, extra),
        setMany: groupedList_setManyAction(nodeName, extra),

        getItems: groupedList_getItems(nodeName, extra),
        setItems: groupedList_setItems(nodeName, extra),
        pushItem: groupedList_pushItem(nodeName, extra),
        patchItem: groupedList_patchItem(nodeName, extra),
        deleteItem: groupedList_deleteItem(nodeName, extra),
        popItem: groupedList_popItem(nodeName, extra),
        clearItems: groupedList_clearItems(nodeName, extra),
        pushManyItems: groupedList_pushManyItems(nodeName, extra),
    };
};

// ============== from store structure ==============
export const generateActionsForStore = <T extends StoreStructure>(
    storeState: T
): StoreActions<T> => {
    let output = {} as StoreActions<T>;

    const keys: Array<keyof T> = Object.keys(storeState);

    for (const key of keys) {
        const value: StoreNode = storeState[key];
        const type = nodeToType(value);

        switch (type) {
            case NodeType.SINGLE_NODE:
                output[key] = single_all(String(key), SIGNATURE) as any;
                break;
            case NodeType.QUEUE_NODE:
                output[key] = queue_all(String(key), SIGNATURE) as any;
                break;
            case NodeType.COLLECTION_NODE:
                output[key] = collection_all(String(key), SIGNATURE) as any;
                break;
            case NodeType.GROUPED_LIST_NODE:
                output[key] = groupedList_all(String(key), SIGNATURE) as any;
                break;
        }
    }

    return output;
};
