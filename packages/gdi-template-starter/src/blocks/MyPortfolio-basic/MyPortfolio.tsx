import React, { useContext } from 'react';
import { LocalGallery } from '@gdi/web-ui';
import {
    Container,
    Wrapper,
    H2,
    Description,
    Portfolio,
} from './MyPortfolio.style';
import { useDataset } from '@gdi/engine';

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
                    <LocalGallery items={items} />
                </Portfolio>
            </Wrapper>
        </Container>
    );
}

export default MyPortfolio;
