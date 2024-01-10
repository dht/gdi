import {
    ApiInfo,
    CollectionActionTypesBag,
    GroupedListActionTypesBag,
    QueueActionTypesBag,
    SingleActionTypesBag,
    StoreActionTypes,
} from './types/types';
import {
    NodeType,
    StoreNode,
    StoreStructure,
    ApiInfoPerType,
} from './types/types';
import { toSingularAction } from './singular';
import { nodeToType } from './structure';

// ============== single ==============
export const single_actionTypes = (nodeName: string): SingleActionTypesBag => {
    return {
        get: `GET_${nodeName.toUpperCase()}`,
        setAll: `SET_${nodeName.toUpperCase()}`,
        patch: `PATCH_${nodeName.toUpperCase()}`,
    };
};

// ============== queue ==============
export const queue_actionTypes = (nodeName: string): QueueActionTypesBag => {
    return {
        get: `GET_${nodeName.toUpperCase()}`,
        setAll: `SET_${nodeName.toUpperCase()}`,
        push: `PUSH_${toSingularAction(nodeName)}`,
        pop: `POP_${toSingularAction(nodeName)}`,
        clear: `CLEAR_${nodeName.toUpperCase()}`,
    };
};

// ============== collection ==============
export const collection_actionTypes = (
    nodeName: string
): CollectionActionTypesBag => {
    return {
        get: `GET_${nodeName.toUpperCase()}`,
        setAll: `SET_${nodeName.toUpperCase()}`,
        set: `SET_${toSingularAction(nodeName)}`,
        add: `ADD_${toSingularAction(nodeName)}`,
        patch: `PATCH_${toSingularAction(nodeName)}`,
        delete: `DELETE_${toSingularAction(nodeName)}`,
    };
};

// ============== grouped list ==============
export const groupedList_actionTypes = (
    nodeName: string
): GroupedListActionTypesBag => {
    return {
        get: `GET_${nodeName.toUpperCase()}`,
        setAll: `SET_${nodeName.toUpperCase()}`,
        set: `SET_${toSingularAction(nodeName)}`,
        add: `ADD_${toSingularAction(nodeName)}`,
        patch: `PATCH_${toSingularAction(nodeName)}`,
        delete: `DELETE_${toSingularAction(nodeName)}`,

        getItems: `GET_${nodeName.toUpperCase()}_ITEMS`,
        setItems: `SET_${nodeName.toUpperCase()}_ITEMS`,
        pushItem: `PUSH_${nodeName.toUpperCase()}_ITEM`,
        popItem: `POP_${nodeName.toUpperCase()}_ITEM`,
        deleteItem: `DELETE_${nodeName.toUpperCase()}_ITEM`,
        patchItem: `PATCH_${nodeName.toUpperCase()}_ITEM`,
        clearItems: `CLEAR_${nodeName.toUpperCase()}_ITEMS`,
        pushManyItems: `PUSH_MANY_${nodeName.toUpperCase()}_ITEMS`,
    };
};

// ============== from store structure ==============
export const generateActionTypesForStore = <T extends StoreStructure>(
    storeState: T
): StoreActionTypes<T> => {
    let output = {} as StoreActionTypes<T>;

    const keys: Array<keyof T> = Object.keys(storeState);

    for (const key of keys) {
        const value: StoreNode = storeState[key];
        const type = nodeToType(value);

        switch (type) {
            case NodeType.SINGLE_NODE:
                output[key] = single_actionTypes(String(key)) as any;
                break;
            case NodeType.QUEUE_NODE:
                output[key] = queue_actionTypes(String(key)) as any;
                break;
            case NodeType.COLLECTION_NODE:
                output[key] = collection_actionTypes(String(key)) as any;
                break;
            case NodeType.GROUPED_LIST_NODE:
                output[key] = groupedList_actionTypes(String(key)) as any;
                break;
        }
    }

    return output;
};

const GET_VERBS = ['get'];
const LOCAL_VERBS = [
    'setAll',
    'set',
    'setMany',
    'pushMany',
    'setItems',
    'pushManyItems',
];

export const generateActionTypesDictionaryForStore = <T extends StoreStructure>(
    storeState: T
): ApiInfoPerType => {
    let output = {} as ApiInfoPerType;

    const storeActionTypes = generateActionTypesForStore(storeState);

    const nodeKeys: Array<keyof T> = Object.keys(storeActionTypes);

    for (const nodeName of nodeKeys) {
        const bag = storeActionTypes[nodeName] as any;

        Object.keys(bag).forEach((apiVerb: any) => {
            const actionType = bag[apiVerb];
            output[actionType] = {
                id: actionType,
                verb: apiVerb,
                nodeName,
            } as ApiInfo;

            if (LOCAL_VERBS.includes(apiVerb)) {
                output[actionType].isLocal = true;
            }

            if (GET_VERBS.includes(apiVerb)) {
                output[actionType].isGet = true;
            }
        });
    }

    return output;
};
