import {
    findNewOrder,
    moveItemWithArrows,
    moveSelectedId,
} from './Sortable.utils';

describe('findNewOrder', () => {
    // 5 items

    it('middle to middle: 1 to 2', () => {
        expect(findNewOrder(mockItems, 1, 2)).toBe(3.5);
    });

    it('middle to middle reversed: 2 to 1', () => {
        expect(findNewOrder(mockItems, 2, 1)).toBe(1.5);
    });

    it('first to last: 0 to 4', () => {
        expect(findNewOrder(mockItems, 0, 4)).toBe(5.5);
    });

    it('last to first: 4 to 0', () => {
        expect(findNewOrder(mockItems, 4, 0)).toBe(0.5);
    });

    it('middle to last: 2 to 4', () => {
        expect(findNewOrder(mockItems, 2, 4)).toBe(5.5);
    });

    it('middle to first: 2 to 0', () => {
        expect(findNewOrder(mockItems, 2, 0)).toBe(0.5);
    });
});

describe.only('moveItemWithArrows', () => {
    // 5 items

    it('middle to middle: 1 to 2', () => {
        expect(moveItemWithArrows(mockItems, '2', 'ArrowDown')).toBe(3.5);
    });

    it('middle to middle reversed: 2 to 1', () => {
        expect(moveItemWithArrows(mockItems, '3', 'ArrowUp')).toBe(1.5);
    });

    it('first Up', () => {
        expect(moveItemWithArrows(mockItems, '1', 'ArrowUp')).toBe(1);
    });

    it('last Down', () => {
        expect(moveItemWithArrows(mockItems, '5', 'ArrowDown')).toBe(5);
    });

    it('<NEW> Up', () => {
        expect(moveItemWithArrows(mockItems, '<NEW>', 'ArrowUp', '<NEW>')).toBe(
            undefined
        );
    });

    it('<NEW> Down', () => {
        expect(
            moveItemWithArrows(mockItems, '<NEW>', 'ArrowDown', '<NEW>')
        ).toBe(undefined);
    });
});

describe('moveSelectedId', () => {
    it('Middle Up: 2', () => {
        expect(moveSelectedId(mockItems, '3', 'ArrowUp')).toBe('2');
    });

    it('Middle Down: 2', () => {
        expect(moveSelectedId(mockItems, '3', 'ArrowDown')).toBe('4');
    });

    it('First Up: 0', () => {
        expect(moveSelectedId(mockItems, '1', 'ArrowUp')).toBe('1');
    });

    it('First Down: 0', () => {
        expect(moveSelectedId(mockItems, '1', 'ArrowDown')).toBe('2');
    });

    it('Last Up: 4', () => {
        expect(moveSelectedId(mockItems, '5', 'ArrowUp')).toBe('4');
    });

    it('Last Down: 4', () => {
        expect(moveSelectedId(mockItems, '5', 'ArrowDown')).toBe('5');
    });

    it('Last Down: 4 with NewId', () => {
        expect(moveSelectedId(mockItems, '5', 'ArrowDown', '<NEW>')).toBe(
            '<NEW>'
        );
    });

    it('New Up: NewId to last', () => {
        expect(moveSelectedId(mockItems, '<NEW>', 'ArrowUp', '<NEW>')).toBe(
            '5'
        );
    });
});

const mockItems = [
    {
        id: '1',
        order: 1,
    },
    {
        id: '2',
        order: 2,
    },
    {
        id: '3',
        order: 3,
    },
    {
        id: '4',
        order: 4,
    },
    {
        id: '5',
        order: 5,
    },
];
