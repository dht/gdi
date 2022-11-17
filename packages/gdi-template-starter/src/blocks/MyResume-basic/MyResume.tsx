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
} from './MyResume.style';

export const id = 'com.usegdi.templates.starter.myResume-basic';

export type MyResumeProps = {
    strings: MyResumeStrings;
    colors: MyResumeColors;
    extra: MyResumeExtra;
};

export type MyResumeStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type MyResumeColors = {
    background?: string;
    text?: string;
};

export type MyResumeExtra = {
    href: string;
    imageUrl: string;
};

export function MyResume(props: MyResumeProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='MyResume-container'
            data-testid='MyResume-container'
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

export default MyResume;
