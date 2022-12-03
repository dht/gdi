import React, { useState } from 'react';
import {
    Wrapper,
    ContainerItem,
    ContainerNewItem,
    Title,
    StatusRow,
    StatusContent,
    WidgetThumb,
} from './MixerStructure.style';
import { SortableList } from '@gdi/web-ui';
import classnames from 'classnames';

export type ActionType = 'drillDown' | 'delete' | 'new';

export type MixerStructureProps = {
    currentInstanceId: string;
    pageStructure: IWidgetInstance[];
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
};

export function MixerStructure(props: MixerStructureProps) {
    const { currentInstanceId, pageStructure, callbacks } = props;

    function renderItem(item: any) {
        const { id } = item as IWidgetInstance;
        const { widgetType, thumbUrl, thumbRatio = 1, isPopulated } = item;

        const className = classnames({ on: isPopulated });

        return (
            <ContainerItem key={id}>
                <Title>{widgetType}</Title>
                <StatusRow>
                    <StatusContent className={className}>D</StatusContent>
                    <WidgetThumb url={thumbUrl} ratio={thumbRatio} />
                </StatusRow>
            </ContainerItem>
        );
    }

    function renderNewItem() {
        return (
            <ContainerNewItem>
                <Title>[New Block]</Title>
            </ContainerNewItem>
        );
    }

    return (
        <Wrapper
            className='MixerStructure-wrapper'
            data-testid='MixerStructure-wrapper'
        >
            <SortableList
                items={pageStructure}
                renderItem={renderItem}
                selectedId={currentInstanceId}
                onMoveItem={callbacks.onMoveItem}
                onSelectItem={callbacks.onSelectItem}
                renderNewItem={renderNewItem}
                onAction={callbacks.onAction}
                isFocused={true}
            />
        </Wrapper>
    );
}

export default MixerStructure;
