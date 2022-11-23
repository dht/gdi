import React from 'react';
import LocalGallery from '../../components/LocalGallery/LocalGallery';
import { Container, Wrapper } from './PageTemplate.style';
import config from './json/PageTemplate.json';
import { breadcrumbs } from './PageTemplate.breadcrumbs';
import { data } from './PageTemplate.data';
import { Uno } from '@gdi/uno';

export const id = 'com.usegdi.templates.gdi.pageTemplate-basic';

export type PageTemplateProps = {
    strings: PageTemplateStrings;
    colors: PageTemplateColors;
    extra: PageTemplateExtra;
};

export type PageTemplateStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type PageTemplateColors = {
    background?: string;
    text?: string;
};

export type PageTemplateExtra = {
    href: string;
    imageUrl: string;
};

export function PageTemplate(props: PageTemplateProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='PageTemplate-container'
            data-testid='PageTemplate-container'
            colors={colors}
        >
            <Uno config={config} data={data} breadcrumbs={breadcrumbs} />
        </Container>
    );
}

export default PageTemplate;
