import React from 'react';
import { Wrapper, Icon } from './Search.style';

export type SearchProps = {};

export function Search(_props: SearchProps) {
    return (
        <Wrapper className='Search-wrapper' data-testid='Search-wrapper'>
            <Icon className='material-icons'>search</Icon>
        </Wrapper>
    );
}

export default Search;
