import React from 'react';
import { Container, Content, Subtitle, Title, Icon } from './Whatsapp.style';
import w from './WhatsApp.svg';

export const id = 'com.usegdi.templates.starter.whatsapp-basic';

export type WhatsappProps = {};

export function Whatsapp(props: WhatsappProps) {
    return (
        <Container
            className='Whatsapp-container'
            data-testid='Whatsapp-container'
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
