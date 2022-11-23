import React from 'react';
import { Container } from './Signature.style';

export type SignatureProps = {
    children: string;
};

export function Signature(props: SignatureProps) {
    return (
        <Container
            className='Signature-container'
            data-testid='Signature-container'
        >
            {props.children}
        </Container>
    );
}

export default Signature;
