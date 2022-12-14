import React, { useEffect, useMemo } from 'react';
import { Wrapper, ContainerNewItem, Title } from './MixerVisual.style';
import { EngineEdit, LibraryBuilder } from '@gdi/engine';
import { initTemplate as initTemplateStarter } from '@gdi/template-starter';
import { initTemplate as initTemplateGdi } from '@gdi/template-gdi';
import { initTemplate as initTemplateCard } from '@gdi/template-card';
import { useDelete } from '@gdi/hooks';

export type ActionType = 'drillDown' | 'delete' | 'new';

const NEW_ID = '<NEW>';

export type MixerVisualProps = {
    currentInstanceId: string;
    pageStructure: IElement[];
    datasets: Json;
    callbacks: {
        onSelectItem: (instanceId: string) => void;
        onMoveItem: (instanceId: string, newOrderValue: number) => void;
        onAction: (actionType: ActionType, id: string) => void;
    };
};

export function MixerVisual(props: MixerVisualProps) {
    const { currentInstanceId, pageStructure, callbacks, datasets } = props;

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

    const libraryBuilder = useMemo(() => {
        const instance = new LibraryBuilder();
        initTemplateStarter(instance as any);
        initTemplateGdi(instance as any);
        initTemplateCard(instance as any);

        return instance;
    }, []);

    useDelete(() => {
        if (currentInstanceId === NEW_ID) {
            return;
        }

        callbacks.onAction('delete', currentInstanceId);
    }, [currentInstanceId]);

    function renderNewItem() {
        return (
            <ContainerNewItem
                selected={currentInstanceId === '<NEW>'}
                onClick={() => callbacks.onSelectItem('<NEW>')}
                onDoubleClick={() => callbacks.onAction('new', '')}
            >
                <Title>[New Block]</Title>
            </ContainerNewItem>
        );
    }

    return (
        <Wrapper
            className='MixerVisual-wrapper'
            data-testid='MixerVisual-wrapper'
            style={style}
        >
            <EngineEdit
                selectedId={currentInstanceId}
                onSelectItem={callbacks.onSelectItem}
                onAction={callbacks.onAction}
                elements={pageStructure}
                libraryBuilder={libraryBuilder}
                datasets={datasets}
            />
            {renderNewItem()}
        </Wrapper>
    );
}

export default MixerVisual;
