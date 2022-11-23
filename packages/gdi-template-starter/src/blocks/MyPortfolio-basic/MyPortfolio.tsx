import React from 'react';
import LocalGallery from '../../components/LocalGallery/LocalGallery';
import {
    Container,
    Wrapper,
    H2,
    Description,
    Portfolio,
} from './MyPortfolio.style';

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

    return (
        <Container
            className='MyPortfolio-container'
            data-testid='MyPortfolio-container'
            colors={colors}
        >
            <Wrapper>
                <H2>My Services</H2>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus molestie, justo nec convallis sollicitudin.
                </Description>
                <Portfolio>
                    <LocalGallery items={portfolio} />
                </Portfolio>
            </Wrapper>
        </Container>
    );
}

const portfolio = [
    {
        id: '1',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/11/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Design', 'Marketing'],
    },
    {
        id: '2',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/12/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Design', 'Photography'],
    },
    {
        id: '3',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/13/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Design', 'Marketing', 'Photography'],
    },
    {
        id: '4',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/14/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Design'],
    },
    {
        id: '5',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/15/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Marketing'],
    },
    {
        id: '6',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/16/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Design', 'Photography'],
    },
    {
        id: '7',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/17/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Marketing'],
    },
    {
        id: '8',
        title: 'Responsive',
        imageUrl: 'https://picsum.photos/seed/18/300/300',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, justo nec convallis sollicitudin.',
        tags: ['Photography'],
    },
];

export default MyPortfolio;
