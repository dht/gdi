import React from 'react';
import Filter from '../Filter/Filter';
import { Container } from './Filters.style';

export type FiltersProps = {};

export function Filters(_props: FiltersProps) {
    function renderFilter(filter: any) {
        return <Filter key={filter}></Filter>;
    }

    function renderFilters() {
        return [0, 1, 2, 3, 4].map((filter: any) => renderFilter(filter));
    }

    return (
        <Container
            className='Filters-container'
            data-testid='Filters-container'
        >
            {renderFilters()}
        </Container>
    );
}

export default Filters;
