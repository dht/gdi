import React from 'react';
import { Wrapper } from './Percent.style';

export type PercentProps = {
    value: number;
};

export function Percent(props: PercentProps) {
    const { value } = props;

    if (!value || !isFinite(value)) {
        return null;
    }

    let text = Math.floor(value * 100) + '%';

    if (value > 1) {
        text = 'x' + value.toFixed(1).replace(/\.0$/, '');
    }

    return (
        <Wrapper className='Percent-wrapper' data-testid='Percent-wrapper'>
            {text}
        </Wrapper>
    );
}

export default Percent;
