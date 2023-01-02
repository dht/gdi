import React from 'react';
import { Wrapper } from './TabbedPages.style';

export type TabbedPagesProps = {};

export function TabbedPages(_props: TabbedPagesProps) {
    return (
        <Wrapper className="TabbedPages-wrapper" data-testid="TabbedPages-wrapper">
            TabbedPages
        </Wrapper>
    );
}

export default TabbedPages;
