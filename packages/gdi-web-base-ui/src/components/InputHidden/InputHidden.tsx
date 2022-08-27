import React from 'react';
import { Container, Input } from './InputHidden.style';

export type InputHiddenProps = {
    value?: string;
    onChange: (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // prettier-ignore
};

export const InputHidden = React.forwardRef(
    (props: InputHiddenProps, ref: any) => {
        const { value } = props;

        return (
            <Container
                className='InputHidden-container'
                data-testid='InputHidden-container'
            >
                <Input value={value} onChange={props.onChange} type='hidden' />
            </Container>
        );
    }
);

export default InputHidden;
