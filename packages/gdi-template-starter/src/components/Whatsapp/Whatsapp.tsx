import React from 'react';
import { Container, Content, Subtitle, Title, Icon } from './Whatsapp.style';
import w from './WhatsApp.svg';

export const id = 'com.usegdi.templates.starter.whatsapp-basic';

export type WhatsappProps = {
    phoneNumber: string;
};

export function Whatsapp(props: WhatsappProps) {
    const { phoneNumber } = props;

    function onClick() {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }

    return (
        <Container
            className='Whatsapp-container'
            data-testid='Whatsapp-container'
            onMouseDown={onClick}
        >
            <Icon className='icon'>
                <img src={w} />
            </Icon>
            <Content className='content'>
                <Title>Whatsapp</Title>
                <Subtitle>click to chat</Subtitle>
            </Content>
        </Container>
    );
}

export default Whatsapp;
