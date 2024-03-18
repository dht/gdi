import React from 'react';
import { Wrapper } from './TutorialsWidget.style';

export type TutorialsWidgetProps = {};

export function TutorialsWidget(_props: TutorialsWidgetProps) {
    return (
        <Wrapper className="TutorialsWidget-wrapper" data-testid="TutorialsWidget-wrapper">
            TutorialsWidget
        </Wrapper>
    );
}

export default TutorialsWidget;
