import React, { useContext } from 'react';
import { LocalGallery } from '@gdi/web-ui';
import {
    Container,
    Wrapper,
    H2,
    Description,
    Portfolio,
} from './MyPortfolio.style';
import { SiteContext, useDataset } from '@gdi/engine';

export const id = 'com.usegdi.templates.starter.myPortfolio-basic';

export type MyPortfolioProps = {
    strings: MyPortfolioStrings;
    colors: MyPortfolioColors;
    extra: MyPortfolioExtra;
};

export type MyPortfolioStrings = {
    header: string;
    description?: string;
};

export type MyPortfolioColors = {};

export type MyPortfolioExtra = {
    portfolioDatasetId: string;
};

export function MyPortfolio(props: MyPortfolioProps) {
    const { strings, colors, extra } = props;
    const { header, description } = strings;
    const { portfolioDatasetId } = extra;

    const items = useDataset(portfolioDatasetId);

    const { ga } = useContext(SiteContext);

    function onClick(item: Json) {
        ga('navigate', {
            category: 'gallery',
            label: item.id,
            source: 'portfolio',
        });
    }

    function onView(item: Json) {
        ga('view', {
            category: 'gallery',
            label: item.id,
            source: 'portfolio',
        });
    }

    function onTagChange(tagId: string) {
        ga('component', {
            category: 'gallery',
            label: 'tagChange',
            tagId,
            source: 'portfolio',
        });
    }

    return (
        <Container
            className='MyPortfolio-container'
            data-testid='MyPortfolio-container'
            colors={colors}
        >
            <Wrapper>
                <H2>{header}</H2>
                <Description>{description}</Description>
                <Portfolio>
                    <LocalGallery
                        items={items}
                        onClick={onClick}
                        onView={onView}
                        onTagChange={onTagChange}
                    />
                </Portfolio>
            </Wrapper>
        </Container>
    );
}

export default MyPortfolio;
