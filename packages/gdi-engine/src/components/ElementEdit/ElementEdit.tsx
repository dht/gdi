import { IElement } from '@gdi/store-site';
import React, { useContext } from 'react';
import { EngineContext } from '../../context/Engine.context';
import { ActionType } from '../EngineEdit/EngineEdit';
import Error from '../Error/Error';
import Placeholder from '../Placeholder/Placeholder';
import { Container } from './ElementEdit.style';

export type ElementEditProps = {
    sequence?: number;
    element: IElement;
    isSelected: boolean;
    onSelect: (id: string) => void;
    onAction?: (action: ActionType, id: string) => void;
};

const emptyInstanceProps = {
    strings: {},
    colors: {},
    extra: {},
};

export function ElementEdit(props: ElementEditProps) {
    const { element, isSelected, sequence } = props;
    const { instanceProps = emptyInstanceProps } = element;
    const { blocks } = useContext(EngineContext);

    const block = blocks[element.blockId];

    function onClick() {
        props.onSelect(element.id);
    }

    function onDblClick() {
        if (!props.onAction) {
            return;
        }

        props.onAction('drillDown', element.id);
    }

    function renderBlock() {
        if (!block) {
            if (element.isPlaceholder) {
                return <Placeholder element={element} />;
            } else {
                return <Error element={element} />;
            }
        }

        const CmpBlock = block.component;

        return (
            <CmpBlock
                {...instanceProps}
                sequence={sequence}
                isEditMode={true}
            />
        );
    }

    return (
        <Container
            className='ElementEdit-container'
            data-testid='ElementEdit-container'
            onClick={onClick}
            onDoubleClick={onDblClick}
            selected={isSelected}
        >
            {renderBlock()}
        </Container>
    );
}

export default ElementEdit;
