import React from 'react';
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
    const { strings, colors, extra } = props;
    const { header, version } = strings;
    const { featuresDatasetId } = extra;

    function renderFeature(feature: Feature) {
        const { title, tag } = feature;

        return (
            <Li key={feature.id} className='feature'>
                {title}
                {tag && <span>{tag}</span>}
            </Li>
        );
    }

    function renderFeatures(features: Feature[], isSupported: boolean) {
        return features
            .filter(
                (f) =>
                    f.isSupported === isSupported ||
                    (!isSupported && typeof f.isSupported === 'undefined')
            )
            .map((feature: Feature) => renderFeature(feature));
    }

    return (
        <Container
            className='Features-container'
            data-testid='Features-container'
            colors={colors}
        >
            <Wrapper>
                <H2 id='features'>
                    Features <span>v0.9.1</span>
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

const features: Feature[] = [
    {
        id: '1',
        title: 'React',
        tag: '',
        isSupported: true,
    },
    {
        id: '2',
        title: 'React',
        tag: '',
        isSupported: true,
    },
    {
        id: '3',
        title: 'React',
        tag: '',
        isSupported: true,
    },
    {
        id: '4',
        title: 'React',
        tag: '',
        isSupported: true,
    },
    {
        id: '5',
        title: 'React',
        tag: '',
        isSupported: true,
    },
    {
        id: '1',
        title: 'React',
        tag: '',
    },
    {
        id: '2',
        title: 'React',
        tag: '',
    },
    {
        id: '3',
        title: 'React',
        tag: '',
    },
    {
        id: '4',
        title: 'React',
        tag: 'not planned',
    },
    {
        id: '5',
        title: 'React',
        tag: 'v0.9.3',
    },
];

export default Features;
