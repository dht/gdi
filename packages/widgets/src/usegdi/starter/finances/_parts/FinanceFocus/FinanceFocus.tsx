import React from 'react';
import { Wrapper } from './FinanceFocus.style';

export type FinanceFocusProps = {};

export function FinanceFocus(_props: FinanceFocusProps) {
    return (
        <Wrapper className="FinanceFocus-wrapper" data-testid="FinanceFocus-wrapper">
            FinanceFocus
        </Wrapper>
    );
}

export default FinanceFocus;
