import React from 'react';
import { Wrapper } from './Share.style';

export type ShareProps = {};

export function Share(_props: ShareProps) {
    return (
        <Wrapper className='Share-wrapper' data-testid='Share-wrapper'>
            Share
        </Wrapper>
    );
}

export default Share;
