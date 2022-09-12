import React, { useContext, useRef } from 'react';
import Draggable from 'react-draggable';
import { LayoutContext } from '../../context/LayoutDesigner.context';
import {
    Container,
    ContainerResolutions,
    Item,
    Resolution,
    Title,
    Tree,
} from './DesignerTree.style';
import classnames from 'classnames';
import { sortBy } from 'shared-base';
import { resolutions } from './DesignerTree.resolutions';

export type DesignerTreeProps = {
    layout: ILayout;
};

export function DesignerTree(props: DesignerTreeProps) {
    const { layout } = props;
    const context = useContext(LayoutContext);
    const { items, selectedItemId } = context;
    const ref = useRef(null);

    console.log('layout ->', layout);

    function renderItem(item: IFlexEntity) {
        const name = item.entityType === 'container' ? item.direction : 'item';

        const className = classnames({
            selected: item.id === selectedItemId,
        });

        return (
            <Item key={item.id} className='item'>
                <Title
                    className={className}
                    onClick={() => context.selectEntity(item.id)}
                >
                    - {name}-{item.id} <span>({item.order})</span>
                </Title>
                {renderItems(item.id)}
            </Item>
        );
    }

    function renderItems(parentId: number) {
        const sortedAndFilteredItems = items
            .filter((item) => item.parentId === parentId)
            .sort(sortBy('order'));

        return sortedAndFilteredItems.map((item: IFlexEntity) =>
            renderItem(item)
        );
    }

    return (
        <Draggable nodeRef={ref}>
            <Container
                ref={ref}
                className='DesignerTree-container'
                data-testid='DesignerTree-container'
            >
                <Tree>{renderItems(0)}</Tree>
                <Resolutions />
            </Container>
        </Draggable>
    );
}

export const Resolutions = () => {
    function renderResolution(resolution: string) {
        return (
            <Resolution key={resolution} className='resolution'>
                {resolution}
            </Resolution>
        );
    }

    function renderResolutions() {
        return resolutions.map((resolution: string) =>
            renderResolution(resolution)
        );
    }
    return <ContainerResolutions>{renderResolutions()}</ContainerResolutions>;
};

export default DesignerTree;
