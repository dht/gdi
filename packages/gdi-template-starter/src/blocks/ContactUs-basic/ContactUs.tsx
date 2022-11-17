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
} from './ContactUs.style';

export const id = 'com.usegdi.templates.starter.contactUs-basic';

export type ContactUsProps = {
    strings: ContactUsStrings;
    colors: ContactUsColors;
    extra: ContactUsExtra;
};

export type ContactUsStrings = {
    slogan?: string;
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type ContactUsColors = {
    background?: string;
    text?: string;
};

export type ContactUsExtra = {
    href: string;
    imageUrl: string;
};

export function ContactUs(props: ContactUsProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

    return (
        <Container
            className='ContactUs-container'
            data-testid='ContactUs-container'
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

export default ContactUs;
