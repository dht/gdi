import React from 'react';
import { Container } from './AccountSelector.style';

export type AccountSelectorProps = {
    children?: string;
    onClick: () => void;
};

export function AccountSelector(props: AccountSelectorProps) {
    return (
        <Container
            className='AccountSelector-container'
            data-testid='AccountSelector-container'
            onClick={props.onClick}
        >
            {props.children}
        </Container>
    );
}

export default AccountSelector;
