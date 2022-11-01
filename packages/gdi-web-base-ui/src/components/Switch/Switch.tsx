import { useMeasure, useMount } from 'react-use';
import React, { useRef, useState } from 'react';
import { Bk, Container, Option } from './Switch.style';
import { SwitchOption } from '../../types';
import classnames from 'classnames';

export type SwitchProps = {
    options: SwitchOption[];
    value?: string;
    defaultValue?: string;
    vertical?: boolean;
    onChange?: (option: SwitchOption) => void;
};

export function Switch(props: SwitchProps) {
    const { options, value: controlledValue, defaultValue, vertical } = props;
    const [localValue, setLocalValue] = useState(defaultValue);
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

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
                title={option.hint}
                onMouseDown={() => onClick(option)}
                onTouchStart={() => onClick(option)}
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

        let style: React.CSSProperties = {};

        if (vertical) {
            const itemHeight = height / options.length;
            style.width = width + 'px';
            style.height = itemHeight + 'px';
            style.top = index * itemHeight + 'px';
        } else {
            const itemWidth = width / options.length;
            style.width = itemWidth + 'px';
            style.left = index * itemWidth;
        }

        return <Bk style={style} />;
    }

    const className = classnames('Switch-container', {
        vertical,
    });

    return (
        <Container
            className={className}
            data-testid='Switch-container'
            ref={ref}
        >
            {renderOptions()}
            {renderBk()}
        </Container>
    );
}

export default Switch;
