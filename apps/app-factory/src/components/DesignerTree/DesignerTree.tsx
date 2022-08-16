import React, { useContext, useRef, useState } from 'react';
import classnames from 'classnames';
import Draggable from 'react-draggable';
import { Button, Icon } from '@gdi/web-ui';
import { FlexDesignerEmpty } from '../FlexDesignerEmpty/FlexDesignerEmpty';
import { ILayout, IResolution } from '@gdi/store-factory';
import { sortBy } from 'shared-base';
import {
    Column,
    Container,
    ContainerResolutions,
    Info,
    Item,
    Resolution,
    ResolutionCount,
    ResolutionDimensions,
    ResolutionName,
    ResolutionTitle,
    Title,
    Tree,
} from './DesignerTree.style';

export type DesignerTreeProps = {
    layout: ILayout;
    flexEntityId?: string;
    resolutionId?: string;
    resolutions: IBreakpoints;
    callbacks: {
        selectEntity: (entityId: string) => void;
        onAction: (actionType: FlexAction) => void;
        onResolutionChange: (resolutionId: string) => void;
        onSeed: (withId: string) => void;
    };
};

export function DesignerTree(props: DesignerTreeProps) {
    const { layout, flexEntityId, resolutionId, callbacks, resolutions } =
        props;
    const [hoveredResolution, setHoveredResolution] = useState<IBreakpoint>();
    const { items = [] } = layout || {};
    const ref = useRef(null);

    function renderItem(item: IFlexEntity) {
        const { id, entityType, locationId, flex = 1, direction } = item;
        const name = entityType === 'container' ? direction : 'item';

        const className = classnames(entityType, {
            selected: id === flexEntityId,
        });

        const title = locationId ? locationId : `${name}-${id}`;

        return (
            <Item key={id} className='item'>
                <Title
                    className={className}
                    onClick={() => callbacks.selectEntity(item.id)}
                    onDoubleClick={() => callbacks.onAction('rename')}
                >
                    - {title} <span>({flex})</span>
                </Title>
                {renderItems(id)}
            </Item>
        );
    }

    function renderItems(parentId: string) {
        const sortedAndFilteredItems = items
            .filter((item) => item.parentId === parentId)
            .sort(sortBy('order'));

        return sortedAndFilteredItems.map((item: IFlexEntity) =>
            renderItem(item)
        );
    }

    function renderResolutionInfo() {
        const selectedResolution = Object.values(resolutions).find(
            (res: IBreakPoint) => res.id === resolutionId
        );

        const resolution = hoveredResolution || selectedResolution;

        if (!resolution) {
            return null;
        }

        return (
            <Info>
                <ResolutionTitle>{resolution.id}</ResolutionTitle>
                <ResolutionDimensions>
                    {resolution.screenWidth}x{resolution.screenHeight}px
                </ResolutionDimensions>
            </Info>
        );
    }

    function renderTree() {
        if (items.length === 0) {
            return <FlexDesignerEmpty onSeed={callbacks.onSeed} />;
        }

        return <Tree>{renderItems('')}</Tree>;
    }

    return (
        <Draggable nodeRef={ref}>
            <Container
                ref={ref}
                className='DesignerTree-container'
                data-testid='DesignerTree-container'
            >
                <Column>
                    {renderTree()}
                    {renderResolutionInfo()}
                </Column>
                <Resolutions
                    resolutions={resolutions}
                    currentResolutionId={resolutionId}
                    onHover={setHoveredResolution}
                    onClick={(resolution) =>
                        callbacks.onResolutionChange(resolution.id)
                    }
                />
            </Container>
        </Draggable>
    );
}

type ResolutionsProps = {
    resolutions: IBreakpoints;
    currentResolutionId?: string;
    onHover: (resolution: IBreakpoint) => void;
    onClick: (resolution: IBreakpoint) => void;
};

export const Resolutions = (props: ResolutionsProps) => {
    const { resolutions, currentResolutionId } = props;

    function renderResolution(resolution: IBreakpoint) {
        const { id, isDefault, count } = resolution;

        const className = classnames('resolution', {
            selected: id === currentResolutionId,
            empty: count === 0,
        });

        return (
            <Resolution
                key={resolution.id}
                className={className}
                onMouseDown={() => props.onClick(resolution)}
                onMouseOver={() => props.onHover(resolution)}
                onMouseOut={() => props.onHover(null)}
            >
                <ResolutionName>
                    {resolution.id}
                    {isDefault && (
                        <Icon className='star' iconName='FavoriteStarFill' />
                    )}
                </ResolutionName>
                {count ? <ResolutionCount>{count}</ResolutionCount> : null}
            </Resolution>
        );
    }

    function renderResolutions() {
        return Object.values(resolutions).map((resolution: IBreakpoint) =>
            renderResolution(resolution)
        );
    }
    return <ContainerResolutions>{renderResolutions()}</ContainerResolutions>;
};

export default DesignerTree;
