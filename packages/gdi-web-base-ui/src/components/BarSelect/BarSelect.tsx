import React from 'react';
import { Wrapper, Option, Options } from './BarSelect.style';

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
        let newValues = [...(value ?? [])];
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
        const { id, text } = option;

        const includes = Array.isArray(value) && value.includes(id);
        const isSelected = value === id || includes;

        return (
            <Option
                key={id}
                selected={isSelected}
                className='option'
                onMouseDown={() => onChange(id)}
                onTouchStart={() => onChange(id)}
            >
                {text}
            </Option>
        );
    }

    function renderOptions() {
        return options.map((option: IOption) => renderOption(option));
    }
    return (
        <Wrapper className='BarSelect-wrapper' data-testid='BarSelect-wrapper'>
            <Options>{renderOptions()}</Options>
        </Wrapper>
    );
}

export default BarSelect;
