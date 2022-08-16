import React, { ForwardedRef } from 'react';
import { Container } from './Slider.style';
import { RefObject, Slider as SliderFluent } from '@fluentui/react';

export type SliderProps = {
    min?: number;
    max?: number;
    step?: number;
    value: number;
    label?: string;
    showValue?: boolean;
    isDisabled?: boolean;
    onChange: (
        value: number,
        range?: [number, number],
        event?:
            | React.MouseEvent
            | React.TouchEvent
            | MouseEvent
            | TouchEvent
            | React.KeyboardEvent
    ) => void;
    onBlur: () => void;
};

export const Slider = React.forwardRef(
    (props: SliderProps, ref: ForwardedRef<HTMLDivElement>) => {
        const { min, max, step, value, label, showValue, isDisabled } = props;

        return (
            <Container
                className='Slider-container'
                data-testid='Slider-container'
            >
                <SliderFluent
                    label={label}
                    ref={ref}
                    min={min}
                    max={max}
                    step={step}
                    onBlur={props.onBlur}
                    defaultValue={value}
                    showValue={showValue}
                    disabled={isDisabled}
                    onChange={props.onChange}
                />
            </Container>
        );
    }
);

export default Slider;
