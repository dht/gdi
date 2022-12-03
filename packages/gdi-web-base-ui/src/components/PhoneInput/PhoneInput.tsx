import React, { ForwardedRef, LegacyRef } from 'react';
import { Wrapper } from './PhoneInput.style';
import PhoneInputBase, { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export type PhoneInputProps = {
    placeholder?: string;
    value?: string;
    defaultCountry?: Country;
    onChange: (value: string) => void;
};

export const PhoneInput = React.forwardRef(
    (props: PhoneInputProps, ref: LegacyRef<any>) => {
        const { value, placeholder, defaultCountry } = props;

        const Cmp: any = PhoneInputBase;

        return (
            <Wrapper
                className='PhoneInput-wrapper'
                data-testid='PhoneInput-wrapper'
            >
                <Cmp
                    placeholder={placeholder}
                    defaultCountry={defaultCountry}
                    value={value}
                    onChange={props.onChange}
                    ref={ref}
                />
            </Wrapper>
        );
    }
);

export default PhoneInput;
