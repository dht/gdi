import React from 'react';
import { Wrapper } from './Ideas.style';
// import { ReactComponent as Content } from './Ideas.md';

export type IdeasProps = {};

export function Ideas(_props: IdeasProps) {
    return (
        <Wrapper className='Ideas-wrapper' data-testid='Ideas-wrapper'>
            {/* <Content /> */}
        </Wrapper>
    );
}

export default Ideas;
