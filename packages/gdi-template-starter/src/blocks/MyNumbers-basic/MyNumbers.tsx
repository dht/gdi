import React from 'react';
import { Icon } from '@fluentui/react';
import {
    Container,
    IconWrapper,
    Number,
    Numbers,
    Title,
    Value,
    Wrapper,
} from './MyNumbers.style';

export const id = 'com.usegdi.templates.starter.myNumbers-basic';

export type MyNumbersProps = {
    strings: MyNumbersStrings;
    colors: MyNumbersColors;
    extra: MyNumbersExtra;
};

export type MyNumbersStrings = {};

export type MyNumbersColors = {};

export type MyNumbersExtra = {
    numbersDatasetId: string;
};

export function MyNumbers(props: MyNumbersProps) {
    const { strings, colors, extra } = props;
    const { numbersDatasetId } = extra;

    function renderNumber(number: Json) {
        const { iconName, value, title } = number;
        return (
            <Number key={number.id} className='number'>
                <IconWrapper>
                    <Icon iconName={iconName} />
                </IconWrapper>
                <Value>{value}</Value>
                <Title>{title}</Title>
            </Number>
        );
    }

    function renderNumbers() {
        return numbers.map((number: Json) => renderNumber(number));
    }

    return (
        <Container
            className='MyNumbers-container'
            data-testid='MyNumbers-container'
            colors={colors}
        >
            <Wrapper>
                <Numbers>{renderNumbers()}</Numbers>
            </Wrapper>
        </Container>
    );
}

const numbers = [
    {
        id: '1',
        iconName: 'Edit',
        value: 100,
        title: 'Happy Clients',
    },
    {
        id: '2',
        iconName: 'Edit',
        value: 100,
        title: 'Happy Clients',
    },
    {
        id: '3',
        iconName: 'Edit',
        value: 100,
        title: 'Happy Clients',
    },
    {
        id: '4',
        iconName: 'Edit',
        value: 100,
        title: 'Happy Clients',
    },
];

export default MyNumbers;
