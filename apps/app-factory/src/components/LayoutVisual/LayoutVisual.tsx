import React from 'react';
import { IFlexEntity, ILayout } from '@gdi/store-factory';
import FlexDesigner from '../FlexDesigner/FlexDesigner';
import TopBar from '../TopBar/TopBar';
import { Wrapper, CurrentResolution, Id } from './LayoutVisual.style';

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
    resolutionId?: IResolution;
};

export function LayoutVisual(props: LayoutVisualProps) {
    const {
        items = [],
        selectedItemId,
        callbacks,
        layout,
        flex,
        isLoading,
        resolutionId,
    } = props;
    const { id = '', name = '' } = layout ?? {};

    return (
        <Wrapper
            className='LayoutVisual-wrapper'
            data-testid='LayoutVisual-wrapper'
        >
            <TopBar header={name} callbacks={callbacks} flex={flex} />
            <FlexDesigner
                items={items}
                selectedItemId={selectedItemId}
                callbacks={callbacks}
                isLoading={isLoading}
            />

            <Id>#{id}</Id>
            <CurrentResolution>{resolutionId}</CurrentResolution>
        </Wrapper>
    );
}

export default LayoutVisual;
