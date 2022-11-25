import React from 'react';
import { Container } from './AccountTag.style';

export type AccountTagProps = {
    children?: string;
    onClick: () => void;
};

export function AccountTag(props: AccountTagProps) {
    return (
        <Container
            className='AccountTag-container'
            data-testid='AccountTag-container'
            onClick={props.onClick}
        >
            {props.children}
        </Container>
    );
}

export default AccountTag;
