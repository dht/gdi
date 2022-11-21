import React from 'react';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import { Container, H3, Wrapper } from './ContactUs.style';

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
                <H3>Contact me today</H3>
                <Whatsapp />
            </Wrapper>
        </Container>
    );
}

export default ContactUs;
