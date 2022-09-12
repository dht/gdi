import { IDataItem } from './SortableList';

export const findNewOrder = (
    items: IDataItem[],
    oldIndex: number,
    newIndex: number
) => {
    const item = items[oldIndex];
    const plusOneItem = items[newIndex];

    if (
        typeof plusOneItem.order === 'undefined' ||
        typeof item.order === 'undefined'
    ) {
        return item.order;
    }

    const previousItem = items[newIndex - 1] || { order: 0 };
    const nextItem = items[newIndex + 1] || { order: plusOneItem.order + 1 };

    const plusTwoItem = newIndex > oldIndex ? nextItem : previousItem;

    if (
        typeof nextItem.order === 'undefined' ||
        typeof plusTwoItem.order === 'undefined'
    ) {
        return item.order;
    }

    return (plusTwoItem.order + plusOneItem.order) / 2;
};

export type Arrow = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export const moveItemWithArrows = (
    items: IDataItem[],
    selectedId: string,
    arrow: Arrow,
    newId?: string
) => {
    const oldItem = items.find((item) => item.id === selectedId);
    const oldIndex = items.findIndex((item) => item.id === selectedId);

    if (oldIndex < 0) {
        return;
    }

    const newIndex = moveIndexByArrows(items, selectedId, arrow, newId);

    if (newIndex < 0 || newIndex >= items.length) {
        return oldItem?.order;
    }

    return findNewOrder(items, oldIndex, newIndex);
};

const moveIndexByArrows = (
    items: IDataItem[],
    selectedId: string,
    arrow: Arrow,
    newId?: string
) => {
    let index = items.findIndex((item) => item.id === selectedId);

    if (newId && selectedId === newId) {
        index = items.length;
    }

    let newIndex = index;

    switch (arrow) {
        case 'ArrowUp':
            newIndex = newIndex - 1;
            break;
        case 'ArrowDown':
            newIndex = newIndex + 1;
            break;
        default:
    }

    return newIndex;
};

export const moveSelectedId = (
    items: IDataItem[],
    selectedId: string,
    arrow: Arrow,
    newId?: string
) => {
    const newIndex = moveIndexByArrows(items, selectedId, arrow, newId);

    if (newIndex < 0) {
        return selectedId;
    }

    const newSelectedItem = items[newIndex];

    if (!newSelectedItem) {
        if (newId && 'ArrowDown') {
            return newId;
        }

        return selectedId;
    }

    return newSelectedItem.id;
};
