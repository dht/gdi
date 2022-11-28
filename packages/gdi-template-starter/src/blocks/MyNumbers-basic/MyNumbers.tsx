import React from 'react';
import { Icon } from '@gdi/web-ui';
import {
    Container,
    IconWrapper,
    Number,
    Numbers,
    Title,
    Value,
    Wrapper,
} from './MyNumbers.style';
import { useDataset } from '@gdi/engine';

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

    const numbers = useDataset(numbersDatasetId);

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

export default MyNumbers;
