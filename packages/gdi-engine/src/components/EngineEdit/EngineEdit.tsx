import React, { useContext } from 'react';
import ElementEdit from '../ElementEdit/ElementEdit';
import {
    EngineContext,
    EngineContextProvider,
} from '../../context/Engine.context';
import { Wrapper, Loading } from './EngineEdit.style';
import { SiteContextProvider } from '../../context/Site.context';

export type ActionType = 'drillDown' | 'delete' | 'new';

export type EngineEditProps = {
    elements: IElement[];
    selectedId?: string;
    onSelectItem: (id: string) => void;
    onAction?: (action: ActionType, id: string) => void;
    libraryBuilder: ILibraryBuilder;
    datasets: Json;
    backgroundColor?: string;
};

export function EngineInner(props: EngineEditProps) {
    const { elements, selectedId, backgroundColor = 'transparent' } = props;
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
                instanceProps={element.instanceProps}
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
        <Wrapper
            className='EngineEdit-wrapper'
            data-testid='EngineEdit-wrapper'
            backgroundColor={backgroundColor}
        >
            {renderInner()}
        </Wrapper>
    );
}

export function EngineEdit(props: EngineEditProps) {
    const { elements, libraryBuilder, datasets } = props;

    return (
        <EngineContextProvider libraryBuilder={libraryBuilder}>
            <SiteContextProvider elements={elements} datasets={datasets}>
                <EngineInner {...props} />
            </SiteContextProvider>
        </EngineContextProvider>
    );
}

export default EngineEdit;
