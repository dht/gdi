import React, { useCallback } from 'react';
import { Wrapper } from './SpinButton.style';
import { SpinButton as SpinButtonFluent } from '@fluentui/react';

export type SpinButtonProps = {
    value: number;
    label?: string;
    min?: number;
    max?: number;
    step?: number;
    suffix?: string;
    onChange: (newValue: number) => void;
};

export function SpinButton(props: SpinButtonProps) {
    const { label, value, min = 0, max = 100, step = 1, suffix = '' } = props;

    const onChange = useCallback(
        (_event: React.SyntheticEvent<HTMLElement>, newValue?: string) => {
            if (newValue) {
                props.onChange(parseInt(newValue, 10));
            }
        },
        []
    );

    const parsedValue = value ? [value.toLocaleString(), suffix].join('') : '';

    return (
        <Wrapper
            className='SpinButton-wrapper'
            data-testid='SpinButton-wrapper'
        >
            <SpinButtonFluent
                label={label}
                value={parsedValue}
                min={min}
                max={max}
                step={step}
                onValidate={(value) => onValidate(value, props)}
                onIncrement={(value) => onDelta(1)(value, props)}
                onDecrement={(value) => onDelta(-1)(value, props)}
                onChange={onChange}
                incrementButtonAriaLabel={`Increase value by ${step}`}
                decrementButtonAriaLabel={`Decrease value by ${step}`}
            />
        </Wrapper>
    );
}

/** Remove the suffix or any other text after the numbers, or return undefined if not a number */
const getNumericPart = (value: string): number | undefined => {
    const output = value.replace(/[^0-9.]/g, '');
    return parseFloat(output);
};

const normalize = (value: number, min?: number, max?: number) => {
    let output = value;

    if (typeof value === 'undefined' || isNaN(value)) {
        return output;
    }

    if (min) {
        output = Math.max(output, min);
    }

    if (max) {
        output = Math.min(output, max);
    }

    return output;
};

const onDelta =
    (delta: number) =>
    (value: string, props: SpinButtonProps): string | void => {
        const { step = 1, suffix = '' } = props;
        let output = getNumericPart(value);

        if (output === undefined) {
            return '';
        }

        output += step * delta;
        output = normalize(output, props.min, props.max);
        return output + suffix;
    };

const onValidate = (value: string, props: SpinButtonProps): string | void => {
    return onDelta(0)(value, props);
};

export default SpinButton;
