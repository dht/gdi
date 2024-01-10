import { isCollectionNodeBlank } from './initialState';

describe('initialState', () => {
    it('should check if collectionNode is blank', () => {
        const nodeBlank = {
            '1': {
                id: '1',
            },
        };

        expect(isCollectionNodeBlank(nodeBlank)).toBe(true);

        const nodeFull = {
            '1': {
                id: '1',
                title: 'full',
            },
        };

        expect(isCollectionNodeBlank(nodeFull)).toBe(false);

        const nodeMany = {
            '1': {
                id: '1',
            },
            '2': {
                id: '2',
            },
        };

        expect(isCollectionNodeBlank(nodeMany)).toBe(false);
    });
});
