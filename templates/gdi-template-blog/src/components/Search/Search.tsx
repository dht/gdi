import React from 'react';
import { Container, Icon } from './Search.style';

export type SearchProps = {};

export function Search(_props: SearchProps) {
    return (
        <Container className='Search-container' data-testid='Search-container'>
            <Icon className='material-icons'>search</Icon>
        </Container>
    );
}

export default Search;
