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
} from './MyNumbers.style';

export const id = 'com.usegdi.templates.starter.myNumbers-basic';

export type MyNumbersProps = {
    strings: MyNumbersStrings;
    colors: MyNumbersColors;
    extra: MyNumbersExtra;
};

export type MyNumbersStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type MyNumbersColors = {
    background?: string;
    text?: string;
};

export type MyNumbersExtra = {
    href: string;
    imageUrl: string;
};

export function MyNumbers(props: MyNumbersProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='MyNumbers-container'
            data-testid='MyNumbers-container'
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

export default MyNumbers;
