import React from 'react';
import { Wrapper, Content, Subtitle, Title, Icon } from './Whatsapp.style';

export const id = 'com.usegdi.templates.starter.whatsapp-basic';

export type WhatsappProps = {
    phoneNumber: string;
    onClick?: (href: string) => void;
};

export function Whatsapp(props: WhatsappProps) {
    const { phoneNumber } = props;

    const href = `https://wa.me/${phoneNumber}`;

    function onClick() {
        if (props.onClick) {
            props.onClick(href);
        }
    }

    return (
        <Wrapper
            className='Whatsapp-container'
            data-testid='Whatsapp-container'
            onClick={onClick}
            href={href}
            target='_blank'
        >
            <Icon className='icon'>
                <img src='//static-b9ebe.web.app/whatsapp.svg' />
            </Icon>
            <Content className='content'>
                <Title>Whatsapp</Title>
                <Subtitle>click to chat</Subtitle>
            </Content>
        </Wrapper>
    );
}

export default Whatsapp;
