import React, { ForwardedRef } from 'react';
import { Wrapper } from './Slider.style';
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
    valueFormat?: (value: number) => string;
};

export const Slider = React.forwardRef(
    (props: SliderProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            min,
            max,
            step,
            value,
            label,
            showValue,
            isDisabled,
            valueFormat,
        } = props;

        return (
            <Wrapper className='Slider-wrapper' data-testid='Slider-wrapper'>
                <SliderFluent
                    label={label}
                    ref={ref}
                    min={min}
                    max={max}
                    step={step}
                    onBlur={props.onBlur}
                    value={value}
                    showValue={showValue}
                    disabled={isDisabled}
                    onChange={props.onChange}
                    valueFormat={valueFormat}
                />
            </Wrapper>
        );
    }
);

export default Slider;
