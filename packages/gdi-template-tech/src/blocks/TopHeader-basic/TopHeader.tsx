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
    header: string;
    description?: string;
    ctaButtonText: string;
};

export type TopHeaderColors = {
    background?: string;
    text?: string;
};

export type TopHeaderExtra = {
    href: string;
    imageUrl: string;
};

export function TopHeader(props: TopHeaderProps) {
    const { strings, colors, extra } = props;
    const { slogan, header, description, ctaButtonText } = strings;
    const { imageUrl, href } = extra;

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
