import React from 'react';
import { Container, Wrapper, Copy } from './Footer.style';

export const id = 'com.usegdi.templates.gdi.footer-basic';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    text: string;
};

export type FooterColors = {};

export type FooterExtra = {};

export function Footer(props: FooterProps) {
    const { strings, colors, extra } = props;
    const { text } = strings;

    return (
        <Container
            className='Footer-container'
            data-testid='Footer-container'
            colors={colors}
        >
            <Wrapper>
                <Copy>Copyright &copy; 2022 David All Rights Reserved</Copy>
            </Wrapper>
        </Container>
    );
}

export default Footer;
