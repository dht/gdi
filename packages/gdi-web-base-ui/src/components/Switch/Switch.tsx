import { useMeasure } from 'react-use';
import React, { useState } from 'react';
import { Bk, Container, Option } from './Switch.style';
import classnames from 'classnames';

export type SwitchProps = {
    options: IOption[];
    value?: string;
    defaultValue?: string;
    vertical?: boolean;
    lightMode?: boolean;
    onChange?: (option: IOption) => void;
};

export function Switch(props: SwitchProps) {
    const {
        options,
        value: controlledValue,
        defaultValue,
        vertical,
        lightMode,
    } = props;
    const [localValue, setLocalValue] = useState(defaultValue);
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    const isControlled = typeof props.onChange === 'function';

    const value = isControlled ? controlledValue : localValue;

    function onClick(option: IOption, ev: React.MouseEvent) {
        ev.stopPropagation();

        if (isControlled && props.onChange) {
            props.onChange(option);
        } else {
            setLocalValue(option.id);
        }
    }

    function renderOption(option: IOption) {
        const selected = value === option.id;

        const Icon = (
            <i className='material-symbols-outlined'>{option.iconName}</i>
        );

        return (
            <Option
                key={option.id}
                className='option'
                selected={selected}
                title={option.hint}
                onMouseDown={(ev) => onClick(option, ev)}
                onTouchStart={(ev) => onClick(option, ev as any)}
            >
                {option.text}
                {option.iconName && Icon}
            </Option>
        );
    }

    function renderOptions() {
        return options.map((option: IOption) => renderOption(option));
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

        return <Bk className='bk' style={style} />;
    }

    const className = classnames('Switch-container', {
        vertical,
        lightMode,
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
