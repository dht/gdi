import { SearchBox } from '@fluentui/react';
import React from 'react';
import { Container } from './Search.style';

export type SearchProps = {
    placeholder?: string;
    value?: string;
    onChange: (newValue?: string) => void;
};

export function Search(props: SearchProps) {
    const { value = '', placeholder = 'Search' } = props;

    function onChange(
        _event?: React.ChangeEvent<HTMLInputElement>,
        newValue?: string
    ) {
        props.onChange(newValue);
    }

    return (
        <Container className='Search-container' data-testid='Search-container'>
            <SearchBox
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                underlined={true}
            />
        </Container>
    );
}

export default Search;
