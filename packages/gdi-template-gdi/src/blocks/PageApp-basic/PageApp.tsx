import React from 'react';
import { Container, Wrapper } from './PageApp.style';
import config from './json/PageApp.json';
import { breadcrumbs } from './PageApp.breadcrumbs';
import { data } from './PageApp.data';
import { Uno } from '@gdi/uno';

export const id = 'com.usegdi.templates.gdi.pageApp-basic';

export type PageAppProps = {
    strings: PageAppStrings;
    colors: PageAppColors;
    extra: PageAppExtra;
};

export type PageAppStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type PageAppColors = {
    background?: string;
    text?: string;
};

export type PageAppExtra = {
    href: string;
    imageUrl: string;
};

export function PageApp(props: PageAppProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='PageApp-container'
            data-testid='PageApp-container'
            colors={colors}
        >
            <Wrapper>
                <Uno config={config} data={data} breadcrumbs={breadcrumbs} />
            </Wrapper>
        </Container>
    );
}

export default PageApp;
