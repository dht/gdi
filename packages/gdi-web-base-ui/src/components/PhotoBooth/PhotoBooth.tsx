import React, { useMemo } from 'react';
import { WidgetTitle, Container, TextArea } from './PhotoBooth.style';
import { Chair } from '../Chair/Chair';

export type PhotoBoothProps = {
    widgets: IWidgets;
};

export function PhotoBooth(props: PhotoBoothProps) {
    const { widgets } = props;

    function renderWidget(widget: IWidget, index: number) {
        return (
            <React.Fragment key={index}>
                <WidgetTitle>{widget.id}</WidgetTitle>
                <Chair key={widget.id} widget={widget} sequence={index} />
            </React.Fragment>
        );
    }

    function renderWidgets() {
        return Object.values(widgets).map((widget, index) =>
            renderWidget(widget, index)
        );
    }

    return (
        <Container
            className='PhotoBooth-container'
            data-testid='PhotoBooth-container'
        >
            <TextArea>{JSON.stringify(widgets, null, 4)}</TextArea>
            {renderWidgets()}
        </Container>
    );
}

export default PhotoBooth;
