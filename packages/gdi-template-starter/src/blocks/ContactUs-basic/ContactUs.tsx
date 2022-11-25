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

export type ContactUsExtra = {
    imageUrl: string;
};

export function ContactUs(props: ContactUsProps) {
    const { strings, extra } = props;
    const { header, phoneNumber } = strings;
    const { imageUrl } = extra;

    console.log('props ->', props);

    return (
        <Container
            className='ContactUs-container'
            data-testid='ContactUs-container'
            imageUrl={imageUrl}
        >
            <Wrapper>
                <H3>{header}</H3>
                <Whatsapp phoneNumber={phoneNumber} />
            </Wrapper>
        </Container>
    );
}

export default ContactUs;
