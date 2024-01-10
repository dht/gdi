import { StoreNode, StoreNodeTypes } from './types/types';
import { Json, NodeType } from './types/types';
export declare const nodeToType: (value: StoreNode) => NodeType | undefined;
export declare const analyzeStructure: (json: Json) => StoreNodeTypes;
export declare const clearNodes: (json: Json, nodes: string[]) => Json;
