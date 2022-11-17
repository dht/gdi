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
} from './TopMenu.style';

export const id = 'com.usegdi.templates.starter.topMenu-basic';

export type TopMenuProps = {
    strings: TopMenuStrings;
    colors: TopMenuColors;
    extra: TopMenuExtra;
};

export type TopMenuStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type TopMenuColors = {
    background?: string;
    text?: string;
};

export type TopMenuExtra = {
    href: string;
    imageUrl: string;
};

export function TopMenu(props: TopMenuProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='TopMenu-container'
            data-testid='TopMenu-container'
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

export default TopMenu;
