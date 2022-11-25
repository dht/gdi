import { SearchBox } from '@fluentui/react';
import React from 'react';
import { Container } from './Search.style';

export type SearchProps = {
    placeholder?: string;
    value?: string;
    width?: number;
    onChange: (newValue?: string) => void;
};

export function Search(props: SearchProps) {
    const { width, value = '', placeholder = 'Search' } = props;

    function onChange(
        _event?: React.ChangeEvent<HTMLInputElement>,
        newValue?: string
    ) {
        props.onChange(newValue);
    }

    let style: React.CSSProperties = {};

    if (width) {
        style.width = width + 'px';
    }

    return (
        <Container
            className='Search-container'
            data-testid='Search-container'
            style={style}
        >
            <SearchBox
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disableAnimation={true}
                underlined={true}
            />
        </Container>
    );
}

export default Search;
