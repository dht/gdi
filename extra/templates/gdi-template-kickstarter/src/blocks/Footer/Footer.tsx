import React from 'react';
import { Container, Text, Wrapper } from './Footer.style';

export type FooterProps = {};

export function Footer(_props: FooterProps) {
    return (
        <Wrapper className='Footer-wrapper' data-testid='Footer-wrapper'>
            <Container>
                <Text>Copyright © 2023</Text>
            </Container>
        </Wrapper>
    );
}

export default Footer;
