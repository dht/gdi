import React, { useMemo } from 'react';
import { Container, ContainerNewItem, Title } from './MixerVisual.style';
import { EngineEdit, LibraryBuilder } from '@gdi/engine';
import { initTemplates as initTemplatesGdi } from '@gdi/template-gdi';
import { initTemplates as initTemplatesBlog } from '@gdi/template-blog';
import { useDelete } from '@gdi/web-ui';

export type ActionType = 'drillDown' | 'delete' | 'new';

const NEW_ID = '<NEW>';

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

    const libraryBuilder = useMemo(() => {
        const instance = new LibraryBuilder();
        initTemplatesGdi(instance as any);
        initTemplatesBlog(instance as any);
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
                libraryBuilder={libraryBuilder}
            />
            {renderNewItem()}
        </Container>
    );
}

export default MixerVisual;
