import React, { useContext } from 'react';
import { useDataset, SiteContext } from '@gdi/engine';
import { A, Column, Container, Copy, Li, Ul, Wrapper } from './Footer.style';
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
    const { strings, extra } = props;
    const { text } = strings;
    const { linksDatasetId = '' } = extra;

    const links = useDataset(linksDatasetId);

    const { ga } = useContext(SiteContext);

    const onClick = (label: string) => () => {
        ga('navigate', {
            category: 'footer',
            label,
        });
    };

    function renderLink(link: Json) {
        const { title, href } = link;

        return (
            <Li key={link.id}>
                <A href={href} target='_blank' onClick={onClick(link.id)}>
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
                <Column>
                    <Copy>&copy; {text}</Copy>
                </Column>
                <Column>
                    <Ul>{renderLinks()}</Ul>
                </Column>
            </Wrapper>
        </Container>
    );
}

export default Footer;
