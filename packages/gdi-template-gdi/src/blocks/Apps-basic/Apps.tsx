import React from 'react';
import LocalGallery from '../../components/LocalGallery/LocalGallery';
import { Container, Wrapper, H2 } from './Apps.style';

export const id = 'com.usegdi.templates.gdi.apps-basic';

export type AppsProps = {
    strings: AppsStrings;
    colors: AppsColors;
    extra: AppsExtra;
};

export type AppsStrings = {
    header: string;
};

export type AppsColors = {};

export type AppsExtra = {
    appsDatasetId: string;
};

export function Apps(props: AppsProps) {
    const { strings, extra } = props;
    const { header } = strings;
    const { appsDatasetId } = extra;

    return (
        <Container className='Apps-container' data-testid='Apps-container'>
            <Wrapper>
                <H2 id='templates'>Apps</H2>
                <LocalGallery items={apps} />
            </Wrapper>
        </Container>
    );
}

const apps = [
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

export default Apps;
