import { TrianglesBk, Tabs, Avatar } from '@gdi/web-base-ui';
import React from 'react';
import {
    Wrapper,
    Content,
    Details,
    Subtitle,
    Header,
    Title,
    Top,
    SettingsWrapper,
} from './TabbedPages.style';
import classnames from 'classnames';

export type TabbedPagesProps = {
    title: string;
    subtitle: string;
    avatarUrl: string;
    avatarName: string;
    children: React.ReactNode;
    tabs: ITabData[];
    selectedTabId: string;
    paletteIndex?: number;
    noGradient?: boolean;
    topHeight?: string;
};

export function TabbedPages(props: TabbedPagesProps) {
    const {
        title,
        subtitle,
        avatarUrl,
        avatarName,
        tabs,
        selectedTabId,
        paletteIndex,
        noGradient,
        topHeight,
    } = props;

    const className = classnames({
        raw: noGradient,
    });

    return (
        <Wrapper
            className='TabbedPages-wrapper'
            data-testid='TabbedPages-wrapper'
        >
            <Top className={className} height={topHeight}>
                <TrianglesBk paletteIndex={paletteIndex}>
                    <Details>
                        <Avatar
                            size={100}
                            imageUrl={avatarUrl}
                            name={avatarName}
                        />
                        <Header>
                            <Title>{title}</Title>
                            <Subtitle>{subtitle}</Subtitle>
                        </Header>
                        <SettingsWrapper>
                            <Tabs tabs={tabs} selectedTabId={selectedTabId} />
                        </SettingsWrapper>
                    </Details>
                </TrianglesBk>
            </Top>
            <Content>{props.children}</Content>
        </Wrapper>
    );
}

export default TabbedPages;
