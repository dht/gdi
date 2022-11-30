import React from 'react';
import { Container, Wrapper, H2 } from './Templates.style';
import { LocalGallery } from '@gdi/web-ui';

export const id = 'com.usegdi.templates.gdi.templates-basic';

export type TemplatesProps = {
    strings: TemplatesStrings;
    colors: TemplatesColors;
    extra: TemplatesExtra;
};

export type TemplatesStrings = {
    header: string;
};

export type TemplatesColors = {};

export type TemplatesExtra = {
    templatesDatasetId: string;
};

export function Templates(props: TemplatesProps) {
    const { strings, colors, extra } = props;
    const { header } = strings;
    const { templatesDatasetId } = extra;

    return (
        <Container
            className='Templates-container'
            data-testid='Templates-container'
        >
            <Wrapper>
                <H2 id='templates'>Templates</H2>
                <LocalGallery
                    items={templates}
                    lightMode
                    itemsPerRow={2}
                    itemHeight={376}
                />
            </Wrapper>
        </Container>
    );
}

const templates = [
    {
        id: '1',
        title: 'Starter',
        imageUrl: 'https://static-b9ebe.web.app/template-starter.jpg',
        description: 'A simple freelance template to get you started with GDI',
        tags: ['V1'],
        href: 'https://github.com/dht/gdi/tree/main/packages/gdi-template-starter',
    },
    {
        id: '2',
        title: 'gDI',
        imageUrl: 'https://static-b9ebe.web.app/template-gdi.jpg',
        description: 'The gDI homepage template',
        tags: ['V1'],
        href: 'https://github.com/dht/gdi/tree/main/packages/gdi-template-gdi',
    },
];

export default Templates;
