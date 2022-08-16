import React from 'react';
import { Container, Option, Options } from './BarSelect.style';

type IOption = {
    key: string;
    text: string;
    isHeader?: boolean;
    isDisabled?: boolean;
};

export type BarSelectProps = {
    options: IOption[];
    label?: string;
    placeholder?: string;
    value?: string | string[];
    onChange: (newValue: string | string[]) => void;
    allowMultiple?: boolean;
};

export function BarSelect(props: BarSelectProps) {
    const { options, value, allowMultiple } = props;

    function onChangeMultiple(key: string) {
        let newValues = [...(value || [])];
        const alreadyOn = newValues.includes(key);

        if (alreadyOn) {
            const index = newValues.indexOf(key);
            newValues.splice(index, 1);
        } else {
            newValues.push(key);
        }

        props.onChange(newValues);
    }

    function onChange(key: string) {
        if (allowMultiple) {
            onChangeMultiple(key);
            return;
        }

        props.onChange(key);
    }

    function renderOption(option: IOption) {
        const { key, text } = option;

        const includes = Array.isArray(value) && value.includes(key);
        const isSelected = value === key || includes;

        return (
            <Option
                key={key}
                selected={isSelected}
                className='option'
                // onClick={() => onChange(key)}
                onMouseDown={() => onChange(key)}
            >
                {text}
            </Option>
        );
    }

    function renderOptions() {
        return options.map((option: IOption) => renderOption(option));
    }
    return (
        <Container
            className='BarSelect-container'
            data-testid='BarSelect-container'
        >
            <Options>{renderOptions()}</Options>
        </Container>
    );
}

export default BarSelect;
