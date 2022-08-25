import React from 'react';
import { Container, Wrapper, Links, Link, Copy, GDI } from './Footer.style';

export const id = 'com.usegdi.templates.futuristic.footer-simple';

export type FooterProps = {
    sequence?: number;
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
                <Copy>{copyright}</Copy>
                <Links>
                    <Link href='/terms'>Terms of use</Link>
                    <Link href='/privacy'>Privacy</Link>
                    <GDI>
                        Powered by{' '}
                        <a href='https://usegdi.com' target='_blank'>
                            gDI
                        </a>
                    </GDI>
                </Links>
            </Wrapper>
        </Container>
    );
}

export default Footer;
