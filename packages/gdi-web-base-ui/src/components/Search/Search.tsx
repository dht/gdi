import { SearchBox } from '@fluentui/react';
import React from 'react';
import { Wrapper } from './Search.style';

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
        <Wrapper
            className='Search-wrapper'
            data-testid='Search-wrapper'
            style={style}
        >
            <SearchBox
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disableAnimation={true}
                underlined={true}
            />
        </Wrapper>
    );
}

export default Search;
