import React from 'react';
import { IFlexEntity, ILayout } from '@gdi/store-factory';
import FlexDesigner from '../FlexDesigner/FlexDesigner';
import TopBar from '../TopBar/TopBar';
import { Container, Id } from './LayoutVisual.style';

export type LayoutVisualProps = {
    items?: IFlexEntity[];
    layout: ILayout;
    selectedItemId: string;
    callbacks: {
        selectEntity: (id: string) => void;
        onAction: (action: string) => void;
        onArrow: (shortKey: IShortKey) => void;
        onSeed: (whichId: string) => void;
        onFlexChange: (flex: number) => void;
        onResolutionChange: (resolutionIndex: number) => void;
    };
    flex?: number;
    isLoading?: boolean;
};

export function LayoutVisual(props: LayoutVisualProps) {
    const {
        items = [],
        selectedItemId,
        callbacks,
        layout,
        flex,
        isLoading,
    } = props;
    const { id = '', name = '' } = layout || {};

    return (
        <Container
            className='LayoutVisual-container'
            data-testid='LayoutVisual-container'
        >
            <TopBar header={name} callbacks={callbacks} flex={flex} />
            <FlexDesigner
                items={items}
                selectedItemId={selectedItemId}
                callbacks={callbacks}
                isLoading={isLoading}
            />

            <Id>{id}</Id>
        </Container>
    );
}

export default LayoutVisual;
