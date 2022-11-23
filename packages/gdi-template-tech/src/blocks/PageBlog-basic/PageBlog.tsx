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

export type PageBlogStrings = {};

export type PageBlogColors = {};

export type PageBlogExtra = {};

export function PageBlog(props: PageBlogProps) {
    const { strings, colors, extra } = props;

    return (
        <Container
            className='PageBlog-container'
            data-testid='PageBlog-container'
            colors={colors}
        >
            <Uno config={config} data={data} breadcrumbs={breadcrumbs} />
        </Container>
    );
}

export default PageBlog;
