import React from 'react';
import { Wrapper } from './PreviewWidget.style';

export type PreviewWidgetProps = {};

export function PreviewWidget(_props: PreviewWidgetProps) {
    return (
        <Wrapper
            className='PreviewWidget-wrapper'
            data-testid='PreviewWidget-wrapper'
        >
            PreviewWidget
        </Wrapper>
    );
}

export default PreviewWidget;
