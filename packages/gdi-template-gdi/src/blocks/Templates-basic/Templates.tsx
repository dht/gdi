import React from 'react';
import LocalGallery from '../../components/LocalGallery/LocalGallery';
import { Container, Wrapper, H2 } from './Templates.style';

export const id = 'com.usegdi.templates.gdi.templates-basic';

export type TemplatesProps = {
    strings: TemplatesStrings;
    colors: TemplatesColors;
    extra: TemplatesExtra;
};

export type TemplatesStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type TemplatesColors = {
    background?: string;
    text?: string;
};

export type TemplatesExtra = {
    href: string;
    imageUrl: string;
};

export function Templates(props: TemplatesProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='Templates-container'
            data-testid='Templates-container'
        >
            <Wrapper>
                <H2 id='templates'>Templates</H2>
                <LocalGallery items={templates} />
            </Wrapper>
        </Container>
    );
}

const templates = [
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

export default Templates;
