import React from 'react';
import { Wrapper } from './Style.style';

export type StyleProps = {};

export function Style(_props: StyleProps) {
    return (
        <Wrapper className='Style-wrapper' data-testid='Style-wrapper'>
            Style
        </Wrapper>
    );
}

export default Style;
