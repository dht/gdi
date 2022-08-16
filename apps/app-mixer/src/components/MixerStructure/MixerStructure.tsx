import React from 'react';
import {
    Container,
    ContainerItem,
    ContainerNewItem,
    Title,
    StatusRow,
    StatusContent,
    WidgetThumb,
} from './MixerStructure.style';
import { SortableList } from '@gdi/web-ui';

export type ActionType = 'drillDown' | 'delete' | 'new';

export type MixerStructureProps = {
    currentInstanceId: string;
    pageStructure: IElement[];
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
};

export function MixerStructure(props: MixerStructureProps) {
    const { currentInstanceId, pageStructure, callbacks } = props;

    function renderItem(item: any) {
        const { widget } = item as IElement;
        const { widgetType = '' } = widget || {};

        return (
            <ContainerItem>
                <Title>{widgetType}</Title>
                <StatusRow>
                    <StatusContent>D</StatusContent>
                    <WidgetThumb />
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
        <Container
            className='MixerStructure-container'
            data-testid='MixerStructure-container'
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
        </Container>
    );
}

export default MixerStructure;
