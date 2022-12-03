import React, { useContext } from 'react';
import ElementView from '../ElementView/ElementView';
import {
    EngineContext,
    EngineContextProvider,
} from '../../context/Engine.context';
import { Wrapper, Loading } from './EngineView.style';
import { SiteContextProvider } from '../../context/Site.context';

export type EngineViewProps = {
    elements: IElement[];
    libraryBuilder: ILibraryBuilder;
    datasets: Json;
    backgroundColor?: string;
};

export function EngineInner(props: EngineViewProps) {
    const { elements, backgroundColor = 'white' } = props;
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
        <Wrapper
            className='EngineView-wrapper'
            data-testid='EngineView-wrapper'
            backgroundColor={backgroundColor}
        >
            {renderInner()}
        </Wrapper>
    );
}

export function EngineView(props: EngineViewProps) {
    const { elements, libraryBuilder, datasets } = props;

    return (
        <EngineContextProvider libraryBuilder={libraryBuilder}>
            <SiteContextProvider elements={elements} datasets={datasets}>
                <EngineInner {...props} />
            </SiteContextProvider>
        </EngineContextProvider>
    );
}

export default EngineView;
