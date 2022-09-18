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
    const { widgets } = useContext(EngineContext);

    const widget = widgets[element.widgetId];

    if (!widget) {
        throw new Error(
            `could not find widget '${element.widgetId}' for element '${element.id}'`
        );
    }

    function renderWidget() {
        const CmpWidget = widget.component;

        if (!CmpWidget) {
            return null;
        }

        return <CmpWidget {...instanceProps} sequence={sequence} />;
    }

    return (
        <Container
            className='ElementView-container'
            data-testid='ElementView-container'
        >
            {renderWidget()}
        </Container>
    );
}

export default ElementView;
