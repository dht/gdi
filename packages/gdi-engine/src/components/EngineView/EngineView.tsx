import { IElement } from '@gdi/store-mixer';
import React, { useContext } from 'react';
import ElementView from '../ElementView/ElementView';
import {
    EngineContext,
    EngineContextProvider,
} from '../../context/Engine.context';
import { Container, Loading } from './EngineView.style';

export type EngineViewProps = {
    elements: IElement[];
};

export function EngineInner(props: EngineViewProps) {
    const { elements } = props;
    const { isReady } = useContext(EngineContext);

    function renderElement(element: IElement, index: number) {
        return (
            <ElementView key={element.id} sequence={index} element={element} />
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
            className='EngineView-container'
            data-testid='EngineView-container'
        >
            {renderInner()}
        </Container>
    );
}

export function EngineView(props: EngineViewProps) {
    return (
        <EngineContextProvider>
            <EngineInner {...props} />
        </EngineContextProvider>
    );
}

export default EngineView;
