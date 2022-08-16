import { IWidget } from '@gdi/web-ui';
import React from 'react';
import { WidgetTitle, WidgetWrapper, Container } from './App.style';
import { Chair } from '../Chair/Chair';
import { widgets } from '../../bootstrap';

export function App() {
    function renderWidget(widget: IWidget, index) {
        return (
            <>
                <WidgetTitle>{widget.id}</WidgetTitle>
                <Chair
                    key={widget.id}
                    component={widget.component}
                    widgetInfo={widget.info}
                    sequence={index}
                />
            </>
        );
    }

    function renderWidgets() {
        return Object.values(widgets as IWidget[]).map(
            (widget: IWidget, index) => renderWidget(widget, index)
        );
    }

    return (
        <Container className='App-container' data-testid='App-container'>
            {renderWidgets()}
        </Container>
    );
}

export default App;
