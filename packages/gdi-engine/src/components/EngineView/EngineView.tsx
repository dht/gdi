import { IElement } from '@gdi/store-site';
import React, { useContext } from 'react';
import ElementView from '../ElementView/ElementView';
import {
    EngineContext,
    EngineContextProvider,
} from '../../context/Engine.context';
import { Container, Loading } from './EngineView.style';
import { SiteContextProvider } from '../../context/Site.context';

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
        return elements
            .filter((element) => !element.isPlaceholder)
            .map((element: IElement, index) => renderElement(element, index));
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
    const { elements } = props;

    return (
        <EngineContextProvider>
            <SiteContextProvider elements={elements}>
                <EngineInner {...props} />
            </SiteContextProvider>
        </EngineContextProvider>
    );
}

export default EngineView;
