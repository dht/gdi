import { SearchBox } from '@fluentui/react';
import React from 'react';
import { Container } from './Search.style';

export type SearchProps = {
    placeholder?: string;
    value?: string;
    onChange: (newValue?: string) => void;
    width?: number;
};

export function Search(props: SearchProps) {
    const { value = '', placeholder = 'Search', width } = props;

    function onChange(
        _event?: React.ChangeEvent<HTMLInputElement>,
        newValue?: string
    ) {
        props.onChange(newValue);
    }

    const style = {
        width: width ? `${width}px` : 'auto',
    };

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
                underlined={true}
            />
        </Container>
    );
}

export default Search;
