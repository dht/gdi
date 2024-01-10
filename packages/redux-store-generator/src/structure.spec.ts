import storeState from './fixtures/store-state';
import { analyzeStructure, nodeToType } from './structure';
import { NodeType } from './types/types';

describe('structure', () => {
    it('should identify a QUEUE_NODE', () => {
        const result = nodeToType(storeState.logs);
        expect(result).toEqual(NodeType.QUEUE_NODE);
    });

    it('should identify a COLLECTION_NODE ', () => {
        const result = nodeToType(storeState.products);
        expect(result).toEqual(NodeType.COLLECTION_NODE);
    });

    it('should identify a SINGLE_NODE ', () => {
        const result = nodeToType(storeState.appState);
        expect(result).toEqual(NodeType.SINGLE_NODE);
    });

    it('should return UNDEFINED for others', () => {
        const result = nodeToType(10 as any);
        expect(result).toEqual(undefined);
    });

    it('should analyze a complete store', () => {
        const result = analyzeStructure(storeState);
        expect(result).toEqual({
            appState: NodeType.SINGLE_NODE,
            products: NodeType.COLLECTION_NODE,
            logs: NodeType.QUEUE_NODE,
            chats: NodeType.GROUPED_LIST_NODE,
        });
    });
});

describe('store', () => {
    it('should create a store', () => {
        expect(1).toBe(1);
    });
});
