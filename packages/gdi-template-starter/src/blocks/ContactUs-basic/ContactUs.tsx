import React, { useContext } from 'react';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import { Container, H3, Wrapper } from './ContactUs.style';
import { SiteContext } from '@gdi/engine';
import BkBlur from '../../components/BkBlur/BkBlur';

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
    const { ga } = useContext(SiteContext);

    function onClick(_href: string) {
        ga('navigate', {
            category: 'contactUs',
            label: 'whatsapp',
        });
    }

    return (
        <Wrapper
            className='ContactUs-container'
            data-testid='ContactUs-container'
            bk={<BkBlur imageUrl={imageUrl} />}
        >
            <Container>
                <H3>{header}</H3>
                <Whatsapp phoneNumber={phoneNumber} onClick={onClick} />
            </Container>
        </Wrapper>
    );
}

export default ContactUs;
