import React from 'react';
import { Wrapper } from './AccountSelector.style';

export type AccountSelectorProps = {
    children?: string;
    onClick: () => void;
};

export function AccountSelector(props: AccountSelectorProps) {
    return (
        <Wrapper
            className='AccountSelector-wrapper'
            data-testid='AccountSelector-wrapper'
            onClick={props.onClick}
        >
            {props.children}
        </Wrapper>
    );
}

export default AccountSelector;
