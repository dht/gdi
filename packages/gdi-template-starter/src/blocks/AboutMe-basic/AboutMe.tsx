import React from 'react';
import {
    Container,
    Actions,
    CTA,
    Details,
    H2,
    P,
    Slogan,
    Wrapper,
    Content,
} from './AboutMe.style';

export const id = 'com.usegdi.templates.starter.aboutMe-basic';

export type AboutMeProps = {
    strings: AboutMeStrings;
    colors: AboutMeColors;
    extra: AboutMeExtra;
};

export type AboutMeStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type AboutMeColors = {};

export type AboutMeExtra = {
    href: string;
    imageUrl: string;
};

export function AboutMe(props: AboutMeProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='AboutMe-container'
            data-testid='AboutMe-container'
            colors={colors}
        >
            <Wrapper>
                <Content>
                    <Details>
                        {slogan && <Slogan colors={colors}>{slogan}</Slogan>}
                        <H2>{header}</H2>
                        {description && <P>{description}</P>}
                        <Actions>
                            <CTA colors={colors} href={href}>
                                {ctaButtonText}
                            </CTA>
                        </Actions>
                    </Details>
                </Content>
            </Wrapper>
        </Container>
    );
}

export default AboutMe;
