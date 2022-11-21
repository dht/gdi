import React, { useMemo } from 'react';
import { Container, Wrapper } from './PageBlog.style';
import config from './json/PageBlog.json';
import { breadcrumbs } from './PageBlog.breadcrumbs';
import { data } from './PageBlog.data';
import { Uno } from '@gdi/uno';

export const id = 'com.usegdi.templates.gdi.pageBlog-basic';

export type PageBlogProps = {
    strings: PageBlogStrings;
    colors: PageBlogColors;
    extra: PageBlogExtra;
};

export type PageBlogStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type PageBlogColors = {
    background?: string;
    text?: string;
};

export type PageBlogExtra = {
    href: string;
    imageUrl: string;
};

export function PageBlog(props: PageBlogProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='PageBlog-container'
            data-testid='PageBlog-container'
            colors={colors}
        >
            <Wrapper>
                <Uno config={config} data={data} breadcrumbs={breadcrumbs} />
            </Wrapper>
        </Container>
    );
}

export default PageBlog;
