import React from 'react';
import { Wrapper, Input } from './InputHidden.style';

export type InputHiddenProps = {
    value?: string;
    onChange: (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // prettier-ignore
};

export const InputHidden = React.forwardRef(
    (props: InputHiddenProps, ref: any) => {
        const { value } = props;

        return (
            <Wrapper
                className='InputHidden-wrapper'
                data-testid='InputHidden-wrapper'
            >
                <Input value={value} onChange={props.onChange} type='hidden' />
            </Wrapper>
        );
    }
);

export default InputHidden;
