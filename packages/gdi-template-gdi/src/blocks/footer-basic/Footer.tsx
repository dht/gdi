import { useDataset } from '@gdi/engine';
import React from 'react';
import { A, Column, Container, Li, Ul, Wrapper } from './Footer.style';
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

export type FooterExtra = {
    linksDatasetId?: string;
};

export function Footer(props: FooterProps) {
    const { strings, colors, extra } = props;
    const { text } = strings;
    const { linksDatasetId = '' } = extra;

    const links = useDataset(linksDatasetId);

    function renderLink(link: Json) {
        const { title, href } = link;

        return (
            <Li key={link.id}>
                <A href={href} target='_blank'>
                    {title}
                </A>
            </Li>
        );
    }

    function renderLinks() {
        return links.map((link: Json) => renderLink(link));
    }

    return (
        <Container className='Footer-container' data-testid='Footer-container'>
            <Wrapper>
                <Column>&copy; {text}</Column>
                <Column>
                    <Ul>{renderLinks()}</Ul>
                </Column>
            </Wrapper>
        </Container>
    );
}

export default Footer;
