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
} from './UserBar.style';

export const id = 'com.useGdi.templates.gdi.userBar-simple';

export type UserBarProps = {
    strings: UserBarStrings;
    colors: UserBarColors;
    extra: UserBarExtra;
};

export type UserBarStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type UserBarColors = {
    background?: string;
    text?: string;
};

export type UserBarExtra = {
    href: string;
    imageUrl: string;
};

export function UserBar(props: UserBarProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='UserBar-container'
            data-testid='UserBar-container'
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

export default UserBar;
