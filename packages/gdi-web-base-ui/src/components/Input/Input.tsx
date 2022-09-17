import React from 'react';
import { Container } from './Input.style';
import { TextField } from '@fluentui/react';

export type InputProps = {
    placeholder?: string;
    value?: string;
    label?: string;
    onChange: (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // prettier-ignore
    onBlur?: () => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
    rows?: number;
    multiline?: boolean;
    isNumeric?: boolean;
    isPassword?: boolean;
};

export const Input = React.forwardRef((props: InputProps, ref: any) => {
    const {
        placeholder,
        value = '',
        multiline,
        rows,
        isNumeric,
        isPassword,
    } = props;

    let type = 'text';

    if (isNumeric) {
        type = 'number';
    }

    if (isPassword) {
        type = 'password';
    }

    function onChange(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        _newValue?: string
    ) {
        props.onChange(event);
    }

    return (
        <Container className='Input-container' data-testid='Input-container'>
            <TextField
                itemRef={ref}
                autoComplete='none'
                type={type}
                rows={rows}
                placeholder={placeholder}
                value={value}
                multiline={multiline}
                onBlur={props.onBlur}
                onChange={onChange}
                onKeyDown={props.onKeyDown}
                styles={{
                    root: {
                        padding: '10',
                    },
                }}
            />
        </Container>
    );
});

export default Input;
