import React, { useMemo } from 'react';
import { WidgetTitle, Wrapper, TextArea } from './PhotoBooth.style';
import { Chair } from '../Chair/Chair';
import { ThemeProvider } from 'styled-components';
import { useStyledTheme } from '@gdi/hooks';
import { SiteContextProvider } from '@gdi/engine';

export type PhotoBoothProps = {
    widgets: IWidgets;
    datasets: Json;
    elements: IElement[];
};

export function PhotoBoothInner(props: PhotoBoothProps) {
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
        <Wrapper
            className='PhotoBooth-wrapper'
            data-testid='PhotoBooth-wrapper'
        >
            <TextArea value={JSON.stringify(widgets, null, 4)} readOnly />
            {renderWidgets()}
        </Wrapper>
    );
}

export function PhotoBooth(props: PhotoBoothProps) {
    const { datasets, elements } = props;
    const theme = useStyledTheme('en', false);
    const Cmp: any = ThemeProvider;

    return (
        <Cmp theme={theme}>
            <SiteContextProvider datasets={datasets} elements={elements}>
                <PhotoBoothInner {...props} />
            </SiteContextProvider>
        </Cmp>
    );
}

export default PhotoBooth;
