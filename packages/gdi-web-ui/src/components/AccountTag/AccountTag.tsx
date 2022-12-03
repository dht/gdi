import React from 'react';
import { Wrapper } from './AccountTag.style';

export type AccountTagProps = {
    children?: string;
    onClick: () => void;
};

export function AccountTag(props: AccountTagProps) {
    return (
        <Wrapper
            className='AccountTag-wrapper'
            data-testid='AccountTag-wrapper'
            onClick={props.onClick}
        >
            {props.children}
        </Wrapper>
    );
}

export default AccountTag;
