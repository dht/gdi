import React, { useContext } from 'react';
import { Container, Flex, Row, Wrapper } from './TopHeader.style';
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
    const { menuItems, ga } = useContext(SiteContext);

    const onClick = (componentName: string) => (item: Json) => {
        ga('navigate', {
            category: 'menu',
            label: componentName,
            destination: item.url,
        });
    };

    return (
        <Wrapper
            className='TopHeader-container'
            data-testid='TopHeader-container'
        >
            <Container>
                <Row>
                    <Logo url={logoUrl} />
                    <Flex />
                    <TopMenu items={menuItems} onClick={onClick('topMenu')} />
                </Row>
            </Container>
        </Wrapper>
    );
}

export default TopHeader;
