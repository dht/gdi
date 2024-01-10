import { StoreNode, StoreNodeTypes } from './types/types';
import { Json, NodeType } from './types/types';

const isQueueNode = (value: StoreNode): boolean => {
    return Array.isArray(value);
};

const isCollectionNode = (value: any): boolean => {
    if (typeof value !== 'object') return false;
    const firstKey = Object.keys(value).pop() as any;
    return value && value[firstKey] && value[firstKey].id === firstKey;
};

const isGroupedListNode = (value: any): boolean => {
    if (typeof value !== 'object') return false;
    const firstKey = Object.keys(value).pop() as any;
    const firstValue = firstKey ? value[firstKey] : null;
    const { items } = firstValue ?? {};
    return isCollectionNode(value) && Array.isArray(items);
};

const isSingleNode = (value: any): boolean => {
    if (typeof value !== 'object') return false;
    return !value['id'];
};

export const nodeToType = (value: StoreNode) => {
    if (isQueueNode(value)) {
        return NodeType.QUEUE_NODE;
    } else if (isGroupedListNode(value)) {
        return NodeType.GROUPED_LIST_NODE;
    } else if (isCollectionNode(value)) {
        return NodeType.COLLECTION_NODE;
    } else if (isSingleNode(value)) {
        return NodeType.SINGLE_NODE;
    }

    return undefined;
};

export const analyzeStructure = (json: Json): StoreNodeTypes => {
    const memo = {} as any;
    return Object.keys(json).reduce((output: any, key: string) => {
        if (nodeToType(json[key])) {
            output[key] = nodeToType(json[key]);
        }
        return output;
    }, memo);
};

export const clearNodes = (json: Json, nodes: string[]) => {
    // generating a new object for immutability sake
    return Object.keys(json)
        .filter((key) => !nodes.includes(key))
        .reduce((output: Json, key: string) => {
            output[key] = json[key];
            return output;
        }, {});
};
