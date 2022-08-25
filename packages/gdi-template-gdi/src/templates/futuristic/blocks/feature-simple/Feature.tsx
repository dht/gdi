import React from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H1,
    Image,
    ImageWrapper,
    P,
    Slogan,
    Wrapper,
} from './Feature.style';
import classnames from 'classnames';

export const id = 'com.usegdi.templates.futuristic.feature-simple';

export type FeatureProps = {
    sequence?: number;
    strings: FeatureStrings;
    colors: FeatureColors;
    extra: FeatureExtra;
};

export type FeatureStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText?: string;
};

export type FeatureColors = {
    background?: string;
    text?: string;
};

export type FeatureExtra = {
    href: string;
    imageUrl: string;
    animated?: boolean;
};

export function Feature(props: FeatureProps) {
    const { sequence = 0, strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href = '#', animated } = extra;

    const even = sequence % 2 === 0;
    const animationDirection = sequence % 2 === 1 ? 'Left' : 'Right';
    const animationText = animated ? `fadeIn${animationDirection}` : '';
    const animationImage = animated ? 'fadeInUp' : '';

    const className = classnames('Feature-container viewport', {
        even,
    });

    return (
        <Container
            className={className}
            data-testid='Feature-container'
            colors={colors}
        >
            <Wrapper className='wrapper'>
                <Details data-animated={animationText}>
                    {slogan && <Slogan colors={colors}>{slogan}</Slogan>}
                    <H1>{header}</H1>
                    {description && <P>{description}</P>}
                    <Actions>
                        {ctaButtonText && (
                            <CTA colors={colors} href={href}>
                                {ctaButtonText}
                            </CTA>
                        )}
                    </Actions>
                </Details>
                <ImageWrapper>
                    <Image data-animated={animationImage} src={imageUrl} />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
}

export default Feature;
