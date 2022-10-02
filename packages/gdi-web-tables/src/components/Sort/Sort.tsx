import React from 'react';
import { Container, Title, Item, Items, A } from './Sort.style';

export type SortProps = {
    sort: ISortOption[];
    onClick: (optionId: string) => void;
};

export function Sort(props: SortProps) {
    const { sort = [] } = props;

    function renderOption(option: ISortOption) {
        const { text } = option;

        return (
            <Item key={option.id} className='option'>
                <A onClick={() => props.onClick(option.id)}>{text}</A>
            </Item>
        );
    }

    function renderOptions() {
        return sort.map((option) => renderOption(option));
    }

    return (
        <Container className='Sort-container' data-testid='Sort-container'>
            <Title>Sort by</Title>
            <Items>{renderOptions()}</Items>
        </Container>
    );
}

export default Sort;
