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
} from './CtaAction.style';

export const id = 'com.usegdi.templates.starter.ctaAction-basic';

export type CtaActionProps = {
    strings: CtaActionStrings;
    colors: CtaActionColors;
    extra: CtaActionExtra;
};

export type CtaActionStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type CtaActionColors = {
    background?: string;
    text?: string;
};

export type CtaActionExtra = {
    href: string;
    imageUrl: string;
};

export function CtaAction(props: CtaActionProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='CtaAction-container'
            data-testid='CtaAction-container'
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

export default CtaAction;
