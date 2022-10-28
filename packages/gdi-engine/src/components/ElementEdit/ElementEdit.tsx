import React, { useContext, useState } from 'react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Placeholder from '../Placeholder/Placeholder';
import { ActionType } from '../EngineEdit/EngineEdit';
import { Container, LoaderWrapper } from './ElementEdit.style';
import { EngineContext } from '../../context/Engine.context';

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
    const [showLoader, setShowLoader] = useState(false);

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

    function renderLoader() {
        if (!showLoader) {
            return null;
        }

        return (
            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
        );
    }

    return (
        <Container
            className='ElementEdit-container'
            data-testid='ElementEdit-container'
            onMouseDown={onClick}
            onDoubleClick={onDblClick}
            selected={isSelected}
        >
            {renderWidget()}
            {renderLoader()}
        </Container>
    );
}

export default ElementEdit;
