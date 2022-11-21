import React from 'react';
import { A, Column, Container, Li, Ul, Wrapper } from './Footer.style';
export const id = 'com.usegdi.templates.gdi.footer-basic';

export type FooterProps = {
    strings: FooterStrings;
    colors: FooterColors;
    extra: FooterExtra;
};

export type FooterStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type FooterColors = {
    background?: string;
    text?: string;
};

export type FooterExtra = {
    href: string;
    imageUrl: string;
};

export function Footer(props: FooterProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='Footer-container'
            data-testid='Footer-container'
            colors={colors}
        >
            <Wrapper>
                <Column>&copy; gDI 2022</Column>
                <Column>
                    <Ul>
                        <Li>
                            <A>Community</A>
                        </Li>
                        <Li>
                            <A>Github</A>
                        </Li>
                    </Ul>
                </Column>
            </Wrapper>
        </Container>
    );
}

export default Footer;
