import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Wrapper, Links, Copy } from './Footer.style';

export const id = 'com.useGdi.templates.gdi.footer-simple';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    copyright?: string;
};

export type FooterColors = {
    background?: string;
};

export type FooterExtra = {};

export function Footer(props: FooterProps) {
    const { strings, colors } = props;
    const { copyright } = strings;

    return (
        <Container
            className='Footer-container'
            data-testid='Footer-container'
            colors={colors}
        >
            <Wrapper>
                <Links>
                    <Link to='/terms'>Terms of use</Link>
                    <Link to='/privacy'>Privacy</Link>
                </Links>
                <Copy>{copyright}</Copy>
            </Wrapper>
        </Container>
    );
}

export default Footer;
