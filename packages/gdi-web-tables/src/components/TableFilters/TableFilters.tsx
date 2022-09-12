import React, { useContext } from 'react';
import { Container } from './TableFilters.style';
import { TableContext } from '../Table/Table.context';
import Filters from '../Filters/Filters';

export type TableFiltersProps = {};

export function TableFilters(_props: TableFiltersProps) {
    const context = useContext(TableContext);

    return (
        <Container
            className='TableFilters-container'
            data-testid='TableFilters-container'
            show={context.showFilters}
        >
            <Filters />
        </Container>
    );
}

export default TableFilters;
