import React, { useContext } from 'react';
import { Wrapper, Container, H2 } from './Templates.style';
import { LocalGallery } from '@gdi/web-ui';
import { SiteContext, useDataset } from '@gdi/engine';

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
    const { strings, extra } = props;
    const { header } = strings;
    const { templatesDatasetId } = extra;
    const templates = useDataset(templatesDatasetId);

    const { ga } = useContext(SiteContext);

    function onClick(item: Json) {
        ga('navigate', {
            category: 'gallery',
            label: item.id,
            source: 'templates',
        });
    }

    function onView(item: Json) {
        ga('view', {
            category: 'gallery',
            label: item.id,
            source: 'templates',
        });
    }

    function onTagChange(tagId: string) {
        ga('component', {
            category: 'gallery',
            label: 'tagChange',
            tagId,
            source: 'templates',
        });
    }

    return (
        <Wrapper className='Templates-wrapper' data-testid='Templates-wrapper'>
            <Container>
                <H2 id='templates'>{header}</H2>
                <LocalGallery
                    items={templates}
                    lightMode
                    itemsPerRow={2}
                    itemHeight={376}
                    onClick={onClick}
                    onView={onView}
                    onTagChange={onTagChange}
                />
            </Container>
        </Wrapper>
    );
}

export default Templates;
