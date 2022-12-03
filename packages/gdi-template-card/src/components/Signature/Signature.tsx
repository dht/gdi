import React from 'react';
import { Wrapper } from './Signature.style';

export type SignatureProps = {
    children: string;
};

export function Signature(props: SignatureProps) {
    return (
        <Wrapper className='Signature-wrapper' data-testid='Signature-wrapper'>
            {props.children}
        </Wrapper>
    );
}

export default Signature;
