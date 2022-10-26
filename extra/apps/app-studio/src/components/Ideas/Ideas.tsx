import React from 'react';
import { Container } from './Ideas.style';
// import { ReactComponent as Content } from './Ideas.md';

export type IdeasProps = {};

export function Ideas(_props: IdeasProps) {
    return (
        <Container className='Ideas-container' data-testid='Ideas-container'>
            {/* <Content /> */}
        </Container>
    );
}

export default Ideas;
