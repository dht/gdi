import { max, sortBy, guid4 } from 'shared-base';

export type IItemInfo = {
    item?: IFlexEntity;
    parent?: IFlexEntity;
    siblings?: IFlexEntity[];
    siblingsSelfIndex?: number;
    parentId: string;
    parentFlexDirection?: 'row' | 'column';
    firstChild?: IFlexEntity;
    isLocked?: boolean;
};

export const getItemInfo = (items: IFlexEntity[], id: string) => {
    const output: IItemInfo = {
        isLocked: false,
        parentId: '',
    };

    const item = items.find((i) => i.id === id);

    if (item) {
        output.item = item;
        output.parent = items.find((i) => i.id === item.parentId);
        output.isLocked = item.isLocked;
        output.firstChild = firstChild(items, id);
    }

    if (output.parent) {
        output.parentFlexDirection = output.parent.direction;
        output.parentId = output.parent.id;

        output.siblings = items
            .filter((i) => i.parentId === output.parentId)
            .sort(sortBy('order'));

        output.siblingsSelfIndex = output.siblings.indexOf(item ?? ({} as any));
    }

    return output;
};

export const nextOrder = (items: IFlexEntity[], parentId: string) => {
    const maxValue =
        max(items.filter((i) => i.parentId === parentId).map((i) => i.order)) ??
        0;
    return maxValue + 1;
};

export const nextSibling = (info: IItemInfo) => {
    let { siblings, siblingsSelfIndex: index } = info;

    if (!siblings || typeof index === 'undefined') {
        return null;
    }

    index++;

    if (index >= siblings.length) {
        index = 0;
    }

    return siblings[index];
};

export const previousSibling = (info: IItemInfo) => {
    let { siblings, siblingsSelfIndex: index } = info;

    if (!siblings || typeof index === 'undefined') {
        return null;
    }

    index--;

    if (index < 0) {
        index = siblings.length - 1;
    }

    return siblings[index];
};

export const firstChild = (items: IFlexEntity[], id: string) => {
    const children = items
        .filter((item) => item.parentId === id)
        .sort(sortBy('order'));

    return children[0];
};

export const findRoot = (items: IFlexEntity[]) => {
    return items.find((item) => item.parentId === '');
};

export const findDescendantsIds = (items: IFlexEntity[], id: string) => {
    const ids: string[] = [];

    items
        .filter((i) => i.parentId === id)
        .forEach((child) => {
            ids.push(child.id);
            ids.push(...findDescendantsIds(items, child.id));
        });

    return ids;
};

export const duplicateItems = (items: IFlexEntity[], change: Json) => {
    const map: Record<string, string> = {
        '': '',
    };

    items.forEach((item) => {
        map[item.id] = guid4();
    });

    return items.map((item) => {
        const { id, parentId } = item;
        const output = { ...item, ...change };

        output['id'] = map[id];
        output['parentId'] = map[parentId];

        return output;
    });
};
