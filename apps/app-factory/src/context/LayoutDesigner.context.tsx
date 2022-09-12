import React, { useMemo } from 'react';
import { createContext } from 'react';
import { useSetState } from 'react-use';
import { useDelete, useKey } from '@gdi/hooks';
import { max } from 'lodash';

export type ILayoutDesignerContext = {
    items: IFlexEntity[];
    selectedItemId: number;
    selectEntity: (entityId: number) => void;
    patchContext: (change: Partial<ILayoutDesignerContext>) => void;
};

const initialState: ILayoutDesignerContext = {
    selectedItemId: 1,
    selectEntity: (entityId: number) => {},
    items: [
        {
            id: 1,
            parentId: 0,
            entityType: 'container',
            direction: 'row',
            isLocked: true,
        },
        {
            id: 2,
            parentId: 1,
            entityType: 'item',
            order: 1,
            isLocked: true,
        },
        {
            id: 3,
            parentId: 1,
            order: 2,
            entityType: 'item',
        },
    ],
    patchContext: () => {},
};

export const LayoutContext = createContext<ILayoutDesignerContext>(initialState); // prettier-ignore

type DesignerProps = {
    children: JSX.Element | JSX.Element[];
};

export const LayoutContextProvider = (props: DesignerProps) => {
    const [state, patchState] = useSetState<ILayoutDesignerContext>({
        ...initialState,
    });

    let newItem: IFlexEntity;

    const callbacks = useMemo(
        () => ({
            selectEntity: (entityId: number) => {
                patchState({ selectedItemId: entityId });
            },
            deleteItem: (itemId?: number) => {
                const { items } = state;

                if (!itemId) {
                    return;
                }

                let newItems = items.filter((i) => i.id !== itemId);
                patchState({ items: newItems });
            },
            split: (horizontally: boolean) => {
                const { items, selectedItemId } = state;
                const info = getItemInfo(items, selectedItemId);

                if (!info.parent || !info.item) {
                    return;
                }

                const sameDirection =
                    (horizontally && info.parentFlexDirection === 'row') ||
                    (!horizontally && info.parentFlexDirection === 'column');

                if (sameDirection) {
                    const order = nextOrder(items, info.parentId);

                    newItem = {
                        id: nextId(items),
                        entityType: 'item',
                        parentId: info.parentId,
                        order,
                    };
                    patchState({ items: [...items, newItem] });
                } else {
                    const id = nextId(items);

                    patchState({
                        items: [
                            ...items,
                            {
                                id,
                                entityType: 'container',
                                parentId: info.parentId,
                                direction: horizontally ? 'row' : 'column',
                                order: info.item.order,
                            },
                            {
                                ...info.item,
                                id: id + 1,
                                parentId: id,
                                order: 2,
                            },
                        ],
                    });

                    info.item.parentId = id;
                    info.item.order = 1;
                }
            },
        }),
        [state]
    );

    useKey(
        (ev) => {
            if (!ev.withCtrl) {
                return;
            }
            if (!ev.withShift) {
                callbacks.split(true);
            } else {
                callbacks.split(false);
            }
        },
        {
            filterKeys: ['D', 'd'],
        },
        [state]
    );

    useDelete(() => {
        callbacks.deleteItem(state.selectedItemId);
    }, [state]);

    return (
        <LayoutContext.Provider
            value={{
                ...state,
                ...callbacks,
                patchContext: patchState,
            }}
        >
            {props.children}
        </LayoutContext.Provider>
    );
};

type IItemInfo = {
    item?: IFlexEntity;
    parent?: IFlexEntity;
    parentId: number;
    parentFlexDirection?: 'row' | 'column';
    isLocked?: boolean;
};

const getItemInfo = (items: IFlexEntity[], id: number) => {
    const output: IItemInfo = {
        isLocked: false,
        parentId: -1,
    };

    console.log('items,id ->', items, id);

    const item = items.find((i) => i.id === id);

    if (item) {
        output.item = item;
        output.parent = items.find((i) => i.id === item.parentId);
        output.isLocked = item.isLocked;
    }

    if (output.parent) {
        output.parentFlexDirection = output.parent.direction;
        output.parentId = output.parent.id;
    }

    return output;
};

const nextId = (items: IFlexEntity[]) => {
    const maxValue = max(items.map((i) => i.id)) || 0;
    return maxValue + 1;
};

const nextOrder = (items: IFlexEntity[], parentId: number) => {
    const maxValue =
        max(items.filter((i) => i.parentId === parentId).map((i) => i.order)) ||
        0;
    return maxValue + 1;
};
