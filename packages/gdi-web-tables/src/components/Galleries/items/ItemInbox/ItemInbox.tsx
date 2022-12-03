import React from 'react';
import { Wrapper } from './ItemInbox.style';

export type ItemInboxProps = {};

export function ItemInbox(_props: ItemInboxProps) {
    return (
        <Wrapper className='ItemInbox-wrapper' data-testid='ItemInbox-wrapper'>
            ItemInbox
        </Wrapper>
    );
}

export default ItemInbox;
