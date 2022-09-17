import React, { useContext } from 'react';
import classnames from 'classnames';
import FlexDesignerEmpty from '../FlexDesignerEmpty/FlexDesignerEmpty';
import TopBar from '../TopBar/TopBar';
import { findRoot } from '../../utils/flex';
import { FlexDesignerLoader } from '../FlexDesignerLoader/FlexDesignerLoader';
import { IFlexEntity } from 'stores/gdi-store-factory/dist';
import { sortBy } from 'shared-base';
import {
    Container,
    Content,
    Item,
    ItemTitle,
    Wrapper,
} from './FlexDesigner.style';
import {
    useArrows,
    useDelete,
    useBackspace,
    useNumpad,
    useEnter,
    useKey,
} from '@gdi/hooks';

export type FlexAction =
    | 'splitVertically'
    | 'splitHorizontally'
    | 'delete'
    | 'edit'
    | 'rename';

export type FlexDesignerProps = {
    items: IFlexEntities;
    selectedItemId: string;
    callbacks: {
        selectEntity: (entityId: string) => void;
        onAction: (actionType: FlexAction) => void;
        onArrow: (arrow: IShortKey) => void;
        onSeed: (whichId: string) => void;
        onFlexChange: (flex: number) => void;
        onResolutionChange: (resolutionIndex: number) => void;
    };
    isLoading: boolean;
};

export function FlexDesigner(props: FlexDesignerProps) {
    const { items, selectedItemId, callbacks, isLoading } = props;

    useKey(
        (ev) => {
            if (!ev.withCtrl) {
                return;
            }
            if (!ev.withShift) {
                callbacks.onAction('splitHorizontally');
            } else {
                callbacks.onAction('splitVertically');
            }
        },
        {
            filterKeys: ['D', 'd'],
        },
        [items]
    );

    useArrows((shortKey) => {
        callbacks.onArrow(shortKey);
    });

    useDelete(() => {
        callbacks.onAction('delete');
    });

    useBackspace(() => {
        callbacks.onAction('delete');
    });

    useNumpad((shortKey) => {
        const value = parseInt(shortKey.key);

        if (shortKey.withCtrl) {
            callbacks.onResolutionChange(value);
            return;
        }

        callbacks.onFlexChange(value);
    });

    useEnter((shortKey) => {
        if (shortKey.withAlt) {
            callbacks.onAction('edit');
        } else {
            callbacks.onAction('rename');
        }
    });

    function onDoubleClick(ev: React.MouseEvent<HTMLElement>) {
        if (ev.altKey) {
            callbacks.onAction('edit');
        } else {
            callbacks.onAction('rename');
        }
    }

    function renderContainer(entity: IFlexEntity) {
        const { direction, flex } = entity;

        const style = {
            ...entity.style,
            flexDirection: direction,
            flex,
        };

        const className = classnames('entity', `entity-${entity.id}`, {
            selected: selectedItemId === entity.id,
        });

        return (
            <Container key={entity.id} className={className} style={style}>
                {renderEntities(entity.id)}
            </Container>
        );
    }

    function renderItem(entity: IFlexEntity) {
        const { flex = 1, locationId, entityType, direction } = entity;

        const style = {
            ...entity.style,
            flex,
            flexDirection: direction,
        };

        const className = classnames('entity', `entity-${entity.id}`, {
            selected: selectedItemId === entity.id,
            empty: !locationId,
        });

        const title = locationId ? locationId : `item-${entity.id}`;

        return (
            <Item
                key={entity.id}
                onMouseDown={() => callbacks.selectEntity(entity.id)}
                onDoubleClick={onDoubleClick}
                className={className}
                style={style}
            >
                {entityType === 'item' && <ItemTitle>{title}</ItemTitle>}
            </Item>
        );
    }

    function renderEntity(entity: IFlexEntity) {
        const { entityType } = entity;

        return entityType === 'container'
            ? renderContainer(entity)
            : renderItem(entity);
    }

    function renderEntities(parentId: string) {
        const sortedAndFilteredItems = items
            .filter((item) => item.parentId === parentId)
            .sort(sortBy('order'));

        return sortedAndFilteredItems.map((entity: IFlexEntity) =>
            renderEntity(entity)
        );
    }

    const rootItem = findRoot(items);

    if (!rootItem) {
        if (isLoading) {
            return <FlexDesignerLoader />;
        }

        return <FlexDesignerEmpty onSeed={callbacks.onSeed} />;
    }

    return (
        <Wrapper
            className='FlexDesigner-container'
            data-testid='FlexDesigner-container'
        >
            <Content>{renderEntities(rootItem.id)}</Content>
        </Wrapper>
    );
}

export default FlexDesigner;
