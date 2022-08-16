import React, { ForwardedRef, LegacyRef } from 'react';
import { Container } from './PhoneInput.style';
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

        return (
            <Container
                className='PhoneInput-container'
                data-testid='PhoneInput-container'
            >
                <PhoneInputBase
                    placeholder={placeholder}
                    defaultCountry={defaultCountry}
                    value={value}
                    onChange={props.onChange}
                    ref={ref}
                />
            </Container>
        );
    }
);

export default PhoneInput;
