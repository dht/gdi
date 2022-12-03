import React from 'react';
import { Wrapper } from './Input.style';
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
    preventArrows?: boolean;
};

export const Input = React.forwardRef((props: InputProps, ref: any) => {
    const {
        placeholder,
        value = '',
        multiline,
        rows,
        isNumeric,
        isPassword,
        preventArrows,
    } = props;

    let type = 'text';

    if (isNumeric) {
        type = 'number';
    }

    if (isPassword) {
        type = 'password';
    }

    function onKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
        if (isArrowKey(ev.key) && preventArrows) {
            ev.preventDefault();
        }
        if (props.onKeyDown) {
            props.onKeyDown(ev);
        }
    }

    function onChange(
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        _newValue?: string
    ) {
        props.onChange(event);
    }

    return (
        <Wrapper className='Input-wrapper' data-testid='Input-wrapper'>
            <TextField
                itemRef={ref}
                autoComplete='off'
                type={type}
                rows={rows}
                placeholder={placeholder}
                value={value}
                multiline={multiline}
                onBlur={props.onBlur}
                onKeyDown={onKeyDown}
                onChange={onChange}
                styles={{
                    root: {
                        padding: '10',
                    },
                }}
            />
        </Wrapper>
    );
});

export default Input;

const isArrowKey = (key: string) => {
    return (
        key === 'ArrowUp' ||
        key === 'ArrowRight' ||
        key === 'ArrowDown' ||
        key === 'ArrowLeft'
    );
};
