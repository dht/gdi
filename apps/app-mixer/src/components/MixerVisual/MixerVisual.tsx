import React from 'react';
import { Container, ContainerNewItem, Title } from './MixerVisual.style';
import { EngineEdit } from '@gdi/engine';
import { IElement } from '@gdi/store-site';

export type ActionType = 'drillDown' | 'delete' | 'new';

export type MixerVisualProps = {
    currentInstanceId: string;
    pageStructure: IElement[];
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
};

export function MixerVisual(props: MixerVisualProps) {
    const { currentInstanceId, pageStructure, callbacks } = props;

    const style = {
        zoom:
            window.innerWidth > 3000
                ? 1.3
                : window.innerWidth > 1700
                ? 0.75
                : 0.55,
        maxWidth: 1920,
        margin: '0 auto',
    };

    function renderNewItem() {
        return (
            <ContainerNewItem
                selected={currentInstanceId === '<NEW>'}
                onClick={() => callbacks.onSelectItem('<NEW>')}
            >
                <Title>[New Block]</Title>
            </ContainerNewItem>
        );
    }

    return (
        <Container
            className='MixerVisual-container'
            data-testid='MixerVisual-container'
            style={style}
        >
            <EngineEdit
                selectedId={currentInstanceId}
                onSelectItem={callbacks.onSelectItem}
                onAction={callbacks.onAction}
                elements={pageStructure}
            />
            {renderNewItem()}
        </Container>
    );
}

export default MixerVisual;
