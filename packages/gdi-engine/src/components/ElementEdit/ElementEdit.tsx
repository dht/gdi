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
    instanceProps?: Json;
    onSelect: (id: string) => void;
    onAction?: (action: ActionType, id: string) => void;
};

const emptyInstanceProps = {
    strings: {},
    colors: {},
    extra: {},
};

export function ElementEdit(props: ElementEditProps) {
    const {
        element,
        isSelected,
        sequence,
        instanceProps = emptyInstanceProps,
    } = props;
    const { widgets } = useContext(EngineContext);

    const widget = widgets[element.widgetId];

    function onClick() {
        props.onSelect(element.id);
    }

    function onDblClick() {
        if (!props.onAction) {
            return;
        }

        props.onAction('drillDown', element.id);
    }

    function renderWidget() {
        if (!widget) {
            if (element.isPlaceholder) {
                return <Placeholder element={element} />;
            } else {
                return <Error element={element} />;
            }
        }

        const CmpWidget = widget.component;

        if (!CmpWidget) {
            return null;
        }

        return (
            <CmpWidget
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
            {renderWidget()}
        </Container>
    );
}

export default ElementEdit;
