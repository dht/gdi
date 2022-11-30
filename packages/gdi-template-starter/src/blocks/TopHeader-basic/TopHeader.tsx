import React, { useContext } from 'react';
import { Container, Flex, Wrapper } from './TopHeader.style';
import { SiteContext } from '@gdi/engine';
import TopMenu from '../../components/TopMenu/TopMenu';
import Logo from '../../components/Logo/Logo';

export const id = 'com.usegdi.templates.starter.topHeader-basic';

export type TopHeaderProps = {
    strings: TopHeaderStrings;
    colors: TopHeaderColors;
    extra: TopHeaderExtra;
};

export type TopHeaderStrings = {};

export type TopHeaderColors = {};

export type TopHeaderExtra = {
    logoUrl: string;
};

export function TopHeader(props: TopHeaderProps) {
    const { extra } = props;
    const { logoUrl } = extra;
    const { menuItems } = useContext(SiteContext);

    return (
        <Container
            className='TopHeader-container'
            data-testid='TopHeader-container'
        >
            <Wrapper>
                <Logo url={logoUrl} />
                <Flex />
                <TopMenu items={menuItems} />
            </Wrapper>
        </Container>
    );
}

export default TopHeader;
