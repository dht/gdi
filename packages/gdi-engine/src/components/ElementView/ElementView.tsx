import { IElement } from '@gdi/store-mixer';
import React, { useContext } from 'react';
import { EngineContext } from '../../context/Engine.context';
import { Container } from './ElementView.style';

export type ElementViewProps = {
    sequence?: number;
    element: IElement;
};

const emptyInstanceProps = {
    strings: {},
    colors: {},
    extra: {},
};

export function ElementView(props: ElementViewProps) {
    const { element, sequence } = props;
    const { instanceProps = emptyInstanceProps } = element;
    const { blocks } = useContext(EngineContext);

    const block = blocks[element.blockId];

    if (!block) {
        throw new Error(
            `could not find widget '${element.blockId}' for element '${element.id}'`
        );
    }

    function renderBlock() {
        const CmpBlock = block.component;
        return <CmpBlock {...instanceProps} sequence={sequence} />;
    }

    return (
        <Container
            className='ElementView-container'
            data-testid='ElementView-container'
        >
            {renderBlock()}
        </Container>
    );
}

export default ElementView;
