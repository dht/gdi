import React from 'react';
import {
    Container,
    DateText,
    Logo,
    Message,
    Separator,
    Text,
    Wrapper,
} from './TopHeader.style';
import { dateLong } from '@gdi/language';

const dateText = '';

export const id = 'com.usegdi.templates.tech.topHeader-basic';

export type TopHeaderProps = {
    strings: TopHeaderStrings;
    colors: TopHeaderColors;
    extra: TopHeaderExtra;
};

export type TopHeaderStrings = {
    slogan?: string;
};

export type TopHeaderColors = {};

export type TopHeaderExtra = {
    logoImageUrl: string;
    hrefExtra: string;
};

export function TopHeader(props: TopHeaderProps) {
    const { strings, colors, extra } = props;
    const { slogan } = strings;
    const { logoImageUrl, hrefExtra } = extra;

    return (
        <Container
            className='TopHeader-container'
            data-testid='TopHeader-container'
        >
            <Wrapper>
                <Logo src='/logo.svg' />
                <Text>
                    <DateText>{dateText}</DateText>
                    <Separator>|</Separator>
                    <Message>Come into focus Google</Message>
                </Text>
            </Wrapper>
        </Container>
    );
}

export default TopHeader;
