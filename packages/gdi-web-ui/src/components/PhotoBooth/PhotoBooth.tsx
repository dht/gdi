import React from 'react';
import { WidgetTitle, Container } from './PhotoBooth.style';
import { PhotoBoothChair as Chair } from '../PhotoBoothChair/PhotoBoothChair';

export type PhotoBoothProps = {
    widgets: IWidgets;
};

export function PhotoBooth(props: PhotoBoothProps) {
    const { widgets } = props;

    function renderWidget(widget: IWidget, index: number) {
        return (
            <React.Fragment key={index}>
                <WidgetTitle>{widget.id}</WidgetTitle>
                <Chair
                    key={widget.id}
                    component={widget.component!}
                    widget={widget}
                    sequence={index}
                />
            </React.Fragment>
        );
    }

    function renderWidgets() {
        return Object.values(widgets).map((widget: IWidget, index) =>
            renderWidget(widget, index)
        );
    }

    return (
        <Container
            className='PhotoBooth-container'
            data-testid='PhotoBooth-container'
        >
            {renderWidgets()}
        </Container>
    );
}

export default PhotoBooth;
