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
    header: string;
    phoneNumber: string;
};

export type ContactUsColors = {};

export type ContactUsExtra = {};

export function ContactUs(props: ContactUsProps) {
    const { strings, colors, extra } = props;
    const { header, phoneNumber } = strings;

    return (
        <Container
            className='ContactUs-container'
            data-testid='ContactUs-container'
            colors={colors}
        >
            <Wrapper>
                <H3>Get a quote for your project</H3>
                <Whatsapp />
            </Wrapper>
        </Container>
    );
}

export default ContactUs;
