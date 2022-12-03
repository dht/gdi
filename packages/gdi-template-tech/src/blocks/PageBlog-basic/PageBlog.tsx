import React, { useMemo } from 'react';
import { Wrapper } from './PageBlog.style';
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
        <Wrapper
            className='PageBlog-container'
            data-testid='PageBlog-container'
            colors={colors}
        >
            <Uno config={config as any} data={data} breadcrumbs={breadcrumbs} />
        </Wrapper>
    );
}

export default PageBlog;
