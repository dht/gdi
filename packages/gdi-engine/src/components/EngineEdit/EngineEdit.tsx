import { IElement } from '@gdi/store-site';
import React, { useContext } from 'react';
import ElementEdit from '../ElementEdit/ElementEdit';
import {
    EngineContext,
    EngineContextProvider,
} from '../../context/Engine.context';
import { Container, Loading } from './EngineEdit.style';
import { SiteContextProvider } from '../../context/Site.context';

export type ActionType = 'drillDown' | 'delete' | 'new';

export type EngineEditProps = {
    elements: IElement[];
    selectedId?: string;
    onSelectItem: (id: string) => void;
    onAction?: (action: ActionType, id: string) => void;
};

export function EngineInner(props: EngineEditProps) {
    const { elements, selectedId } = props;
    const { isReady } = useContext(EngineContext);

    function renderElement(element: IElement, index: number) {
        return (
            <ElementEdit
                key={element.id}
                sequence={index}
                isSelected={element.id === selectedId}
                element={element}
                onSelect={props.onSelectItem}
                onAction={props.onAction}
            />
        );
    }

    function renderElements() {
        return elements.map((element: IElement, index) =>
            renderElement(element, index)
        );
    }

    function renderInner() {
        if (!isReady) {
            return <Loading>Loading...</Loading>;
        }

        return renderElements();
    }

    return (
        <Container
            className='EngineEdit-container'
            data-testid='EngineEdit-container'
        >
            {renderInner()}
        </Container>
    );
}

export function EngineEdit(props: EngineEditProps) {
    const { elements } = props;

    return (
        <SiteContextProvider elements={elements}>
            <EngineContextProvider>
                <EngineInner {...props} />
            </EngineContextProvider>
        </SiteContextProvider>
    );
}

export default EngineEdit;
