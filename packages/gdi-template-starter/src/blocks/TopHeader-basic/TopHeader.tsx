import React, { useContext } from 'react';
import { Container, Wrapper, Actions } from './TopHeader.style';
import { SiteContext } from '@gdi/engine';
import TopMenu from '../../components/TopMenu/TopMenu';

export const id = 'com.usegdi.templates.starter.topHeader-basic';

export type TopHeaderProps = {
    strings: TopHeaderStrings;
    colors: TopHeaderColors;
    extra: TopHeaderExtra;
};

export type TopHeaderStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type TopHeaderColors = {
    background?: string;
    text?: string;
};

export type TopHeaderExtra = {
    href: string;
    imageUrl: string;
};

export function TopHeader(props: TopHeaderProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;
    let { menuItems } = useContext(SiteContext);

    return (
        <Container
            className='TopHeader-container'
            data-testid='TopHeader-container'
            colors={colors}
        >
            <Wrapper>
                logo
                <TopMenu items={menuItems} />
                actions
            </Wrapper>
        </Container>
    );
}

export default TopHeader;
