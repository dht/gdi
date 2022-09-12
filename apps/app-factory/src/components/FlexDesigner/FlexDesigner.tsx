import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutDesigner.context';
import { Container, Content, Item, Wrapper } from './FlexDesigner.style';
import { LayoutContextProvider } from '../../context/LayoutDesigner.context';
import TopBar from '../TopBar/TopBar';
import classnames from 'classnames';
import { sortBy } from 'shared-base';
import { useDelete, useKey } from '@gdi/hooks';

type ActionType = 'splitVertically' | 'splitHorizontally' | 'delete';

export type FlexDesignerProps = {
    items: IFlexEntities;
    selectedItemId: string;
    callbacks: {
        selectEntity: (id: string) => void;
        onAction: (actionType: ActionType) => void;
    };
};

export function FlexDesigner(props: FlexDesignerProps) {
    const { items, selectedItemId, callbacks } = props;

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

    useDelete(() => {
        callbacks.onAction('delete');
    }, [items]);

    function renderContainer(entity: IFlexEntity) {
        const { direction } = entity;

        const style = {
            ...entity.style,
            flexDirection: direction,
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
        const { flex = 1, direction } = entity;

        const style = {
            ...entity.style,
            flex,
            flexDirection: direction,
        };

        const className = classnames('entity', `entity-${entity.id}`, {
            selected: selectedItemId === entity.id,
        });

        return (
            <Item
                key={entity.id}
                onClick={() => callbacks.selectEntity(entity.id)}
                className={className}
                style={style}
            />
        );
    }

    function renderEntity(entity: IFlexEntity) {
        const { entityType } = entity;

        return entityType === 'container'
            ? renderContainer(entity)
            : renderItem(entity);
    }

    function renderEntities(parentId: number) {
        const sortedAndFilteredItems = items
            .filter((item) => item.parentId === parentId)
            .sort(sortBy('order'));

        return sortedAndFilteredItems.map((entity: IFlexEntity) =>
            renderEntity(entity)
        );
    }

    return (
        <Wrapper
            className='FlexDesigner-container'
            data-testid='FlexDesigner-container'
        >
            <Content>{renderEntities(0)}</Content>
        </Wrapper>
    );
}

export default FlexDesigner;
