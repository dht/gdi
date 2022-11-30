import React from 'react';
import {
    Container,
    Wrapper,
    H2,
    Overlay,
    Title,
    Description,
    Tag,
} from './Apps.style';
import { LocalGallery } from '@gdi/web-ui';
import classnames from 'classnames';
import { useDataset } from '@gdi/engine';

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

    const apps = useDataset(appsDatasetId);

    function renderOverlay(item: Json) {
        const { title, description, tags } = item;

        const tag = tags[0];

        const className = classnames(tag);

        return (
            <Overlay>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Tag className={className}>{tag}</Tag>
            </Overlay>
        );
    }

    return (
        <Container className='Apps-container' data-testid='Apps-container'>
            <Wrapper>
                <H2 id='templates'>{header}</H2>
                <LocalGallery
                    items={apps}
                    contain
                    renderOverlay={renderOverlay}
                />
            </Wrapper>
        </Container>
    );
}

export default Apps;
