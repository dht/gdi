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
} from './MyServices.style';

export const id = 'com.usegdi.templates.starter.myServices-basic';

export type MyServicesProps = {
    strings: MyServicesStrings;
    colors: MyServicesColors;
    extra: MyServicesExtra;
};

export type MyServicesStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type MyServicesColors = {
    background?: string;
    text?: string;
};

export type MyServicesExtra = {
    href: string;
    imageUrl: string;
};

export function MyServices(props: MyServicesProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='MyServices-container'
            data-testid='MyServices-container'
            colors={colors}
        >
            <Wrapper>
                <Details>
                    {slogan && <Slogan colors={colors}>{slogan}</Slogan>}
                    <H1>{header}</H1>
                    {description && <P>{description}</P>}
                    <Actions>
                        <CTA colors={colors} href={href}>
                            {ctaButtonText}
                        </CTA>
                    </Actions>
                </Details>
                <ImageWrapper>
                    <Image src={imageUrl} />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
}

export default MyServices;
