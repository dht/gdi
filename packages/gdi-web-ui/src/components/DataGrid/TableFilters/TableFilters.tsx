import React, { useContext } from 'react';
import { Container } from './TableFilters.style';
import { DataGridContext } from '../DataGrid.context';
import Filters from '../../Filters/Filters';

export type TableFiltersProps = {};

export function TableFilters(_props: TableFiltersProps) {
    const context = useContext(DataGridContext);

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
