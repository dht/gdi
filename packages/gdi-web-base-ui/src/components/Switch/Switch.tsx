import { useMount } from 'react-use';
import React, { useRef, useState } from 'react';
import { Bk, Container, Option } from './Switch.style';

export type SwitchOption = {
    id: string;
    label?: string;
    iconName?: string;
};

export type SwitchProps = {
    options: SwitchOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (option: SwitchOption) => void;
};

export function Switch(props: SwitchProps) {
    const { options, value: controlledValue, defaultValue } = props;
    const [localValue, setLocalValue] = useState(defaultValue);
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useMount(() => {
        if (!ref || !ref.current) {
            return;
        }
        const box = ref.current.getBoundingClientRect();
        setWidth(box.width);
    });

    const isControlled = typeof props.onChange === 'function';

    const value = isControlled ? controlledValue : localValue;

    function onClick(option: SwitchOption) {
        if (isControlled && props.onChange) {
            props.onChange(option);
        } else {
            setLocalValue(option.id);
        }
    }

    function renderOption(option: SwitchOption) {
        const selected = value === option.id;

        const Icon = <i className='material-icons'>{option.iconName}</i>;

        return (
            <Option
                key={option.id}
                className='option'
                selected={selected}
                onClick={() => onClick(option)}
            >
                {option.label}
                {option.iconName && Icon}
            </Option>
        );
    }

    function renderOptions() {
        return options.map((option: SwitchOption) => renderOption(option));
    }

    function renderBk() {
        let index = options.findIndex((option) => option.id === value);

        if (index === -1) {
            index = 0;
        }

        const itemWidth = width / options.length;
        const left = index * itemWidth;
        return <Bk style={{ left: `${left}px`, width: `${itemWidth}px` }} />;
    }

    return (
        <Container
            className='Switch-container'
            data-testid='Switch-container'
            ref={ref}
        >
            {renderOptions()}
            {renderBk()}
        </Container>
    );
}

export default Switch;
