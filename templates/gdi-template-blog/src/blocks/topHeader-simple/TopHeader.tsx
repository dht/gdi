import React from 'react';
import {
    Container,
    DateText,
    Logo,
    Message,
    Separator,
    Text,
} from './TopHeader.style';
import { format } from 'date-fns';

export const id = 'com.usegdi.templates.blog.topHeader-simple';

const dateText = format(new Date(), 'eeee, MMMM d, yyyy');

export type TopHeaderProps = {};

export function TopHeader(_props: TopHeaderProps) {
    return (
        <Container
            className='TopHeader-container'
            data-testid='TopHeader-container'
        >
            <Logo src='/logo.svg' />
            <Text>
                <DateText>{dateText}</DateText>
                <Separator>|</Separator>
                <Message>Come into focus Google</Message>
            </Text>
        </Container>
    );
}

export default TopHeader;
