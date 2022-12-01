import React from 'react';
import { Container, Wrapper, H2 } from './Templates.style';
import { LocalGallery } from '@gdi/web-ui';
import { useDataset } from '@gdi/engine';

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

    return (
        <Container
            className='Templates-container'
            data-testid='Templates-container'
        >
            <Wrapper>
                <H2 id='templates'>{header}</H2>
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

export default Templates;
