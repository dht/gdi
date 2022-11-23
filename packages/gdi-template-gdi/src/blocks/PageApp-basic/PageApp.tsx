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

export type PageAppStrings = {};

export type PageAppColors = {};

export type PageAppExtra = {
    appsDatasetId: string;
    contentUrl: string;
};

export function PageApp(props: PageAppProps) {
    const { strings, colors, extra } = props;
    const { appsDatasetId, contentUrl } = extra;

    return (
        <Container
            className='PageApp-container'
            data-testid='PageApp-container'
            colors={colors}
        >
            <Uno config={config} data={data} breadcrumbs={breadcrumbs} />
        </Container>
    );
}

export default PageApp;
