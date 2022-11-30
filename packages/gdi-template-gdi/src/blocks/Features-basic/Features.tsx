import React from 'react';
import { useDataset } from '@gdi/engine';
import {
    Container,
    H2,
    Wrapper,
    H3,
    Li,
    Ul,
    Row,
    Column,
} from './Features.style';

export const id = 'com.usegdi.templates.gdi.features-basic';

export type FeaturesProps = {
    strings: FeaturesStrings;
    colors: FeaturesColors;
    extra: FeaturesExtra;
};

export type FeaturesStrings = {
    header: string;
    version?: string;
};

export type FeaturesColors = {};

export type FeaturesExtra = {
    featuresDatasetId: string;
};

export function Features(props: FeaturesProps) {
    const { strings, extra } = props;
    const { header, version } = strings;
    const { featuresDatasetId } = extra;

    const features = useDataset(featuresDatasetId);

    function renderFeature(feature: Json) {
        const { title, tag } = feature;

        return (
            <Li key={feature.id} className='feature'>
                {title}
                {tag && <span>{tag}</span>}
            </Li>
        );
    }

    function renderFeatures(features: Json[], isSupported: boolean) {
        return features
            .filter(
                (f) =>
                    f.isSupported === isSupported ||
                    (!isSupported && typeof f.isSupported === 'undefined')
            )
            .map((feature: Json) => renderFeature(feature));
    }

    return (
        <Container
            className='Features-container'
            data-testid='Features-container'
        >
            <Wrapper>
                <H2 id='features'>
                    {header} <span>{version}</span>
                </H2>

                <Row>
                    <Column>
                        <H3>Supports</H3>
                        <Ul>{renderFeatures(features, true)}</Ul>
                    </Column>

                    <Column>
                        <H3>
                            Does <b>NOT</b> Support
                        </H3>
                        <Ul>{renderFeatures(features, false)}</Ul>
                    </Column>
                </Row>
            </Wrapper>
        </Container>
    );
}

type Feature = {
    id: string;
    title: string;
    tag: string;
    isSupported?: boolean;
};

export default Features;
