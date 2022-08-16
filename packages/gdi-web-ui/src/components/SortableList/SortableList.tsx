import React from 'react';
import {
    Container,
    ContainerItem,
    ContainerNewItem,
} from './SortableList.style';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
    Arrow,
    findNewOrder,
    moveItemWithArrows,
    moveSelectedId,
} from './Sortable.utils';
import { useArrows, useDelete, useEnter } from '@gdi/web-base-ui';

const NEW_ID = '<NEW>';

export type IDataItem = Json & {
    id: string;
    order?: number;
};

export type SortableListProps = {
    items: IDataItem[];
    renderItem: (item: IDataItem) => JSX.Element;
    selectedId: string;
    onMoveItem: (id: string, newOrder: number) => void;
    onSelectItem: (id: string) => void;
    renderNewItem?: () => JSX.Element;
    onAction?: (action: ActionType, id: string) => void;
    isFocused?: boolean;
    disableDragging?: boolean;
};

type ActionType = 'drillDown' | 'delete' | 'new';

export function SortableList(props: SortableListProps) {
    const { items, selectedId, isFocused, disableDragging } = props;

    const sensors = useSensors(useSensor(PointerSensor));

    useArrows(
        (event) => {
            if (!isFocused) {
                return;
            }
            // nudging item instead
            if (event.altKey) {
                const newOrder = moveItemWithArrows(
                    items,
                    selectedId,
                    event.key as Arrow,
                    '<NEW>'
                );

                if (!newOrder) {
                    return;
                }

                props.onMoveItem(selectedId, newOrder);
                return;
            }

            const newId = props.renderNewItem ? NEW_ID : undefined;

            const nextSelectedId = moveSelectedId(
                items,
                selectedId,
                event.key as Arrow,
                newId
            );
            props.onSelectItem(nextSelectedId);
        },
        [selectedId, items]
    );

    useEnter(() => {
        if (!props.onAction || !selectedId || !isFocused) {
            return;
        }

        if (selectedId === NEW_ID) {
            props.onAction('new', selectedId);
        } else {
            props.onAction('drillDown', selectedId);
        }
    }, [selectedId, items]);

    useDelete(() => {
        if (!props.onAction || !selectedId || !isFocused) {
            return;
        }

        if (selectedId === NEW_ID) {
            return;
        }

        props.onAction('delete', selectedId);
    }, [selectedId, items]);

    function onDrillDown(instanceId: string) {
        if (!props.onAction) {
            return;
        }

        if (instanceId === NEW_ID) {
            props.onAction('new', selectedId);
        } else {
            props.onAction('drillDown', selectedId);
        }
    }
    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (active.id === over.id) {
            return;
        }

        const activeItem = items.find((item) => item.id === active.id);
        const overItem = items.find((item) => item.id === over.id);

        if (!activeItem || !overItem) {
            return;
        }

        const oldIndex = items.indexOf(activeItem);
        const newIndex = items.indexOf(overItem);
        const newOrder = findNewOrder(items, oldIndex, newIndex);

        if (!newOrder) {
            return;
        }

        props.onMoveItem(active.id, newOrder);
    }

    function renderItem(item: IDataItem) {
        return (
            <SortableItem
                key={item.id}
                id={item.id}
                selected={selectedId === item.id}
                onSelectItem={props.onSelectItem}
                onDrillDown={onDrillDown}
            >
                {props.renderItem(item)}
            </SortableItem>
        );
    }

    function renderItems() {
        return items.map((item: IDataItem) => renderItem(item));
    }

    function renderNewItem() {
        if (!props.renderNewItem) {
            return null;
        }

        return (
            <ContainerNewItem
                selected={selectedId === NEW_ID}
                onClick={() => props.onSelectItem(NEW_ID)}
                onDoubleClick={() => onDrillDown(NEW_ID)}
            >
                {props.renderNewItem()}
            </ContainerNewItem>
        );
    }

    return (
        <Container
            className='SortableList-container'
            data-testid='SortableList-container'
        >
            <DndContext
                sensors={disableDragging ? undefined : sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={items}
                    strategy={verticalListSortingStrategy}
                >
                    {renderItems()}
                </SortableContext>
            </DndContext>
            {renderNewItem()}
        </Container>
    );
}

type SortableItemProps = {
    id: string;
    children: JSX.Element;
    selected?: boolean;
    onSelectItem: (id: string) => void;
    onDrillDown: (id: string) => void;
};

export function SortableItem(props: SortableItemProps) {
    const { id, selected } = props;
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    function onSelectItem() {
        props.onSelectItem(id);
    }

    function onDrillDown() {
        props.onDrillDown(id);
    }

    return (
        <ContainerItem
            ref={setNodeRef}
            style={style}
            selected={selected}
            onMouseDown={onSelectItem}
            onDoubleClick={onDrillDown}
            {...attributes}
            {...listeners}
        >
            {props.children}
        </ContainerItem>
    );
}

export default SortableList;
