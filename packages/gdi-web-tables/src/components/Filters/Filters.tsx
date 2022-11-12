import React from 'react';
import { Container } from './Filters.style';
import { Filter } from '../Filter/Filter';
import { FilterAuto } from '../FilterAuto/FilterAuto';
import { Sort } from '../Sort/Sort';

export type FiltersProps = {
    config: IFilterConfig;
    value: ITrio;
    onClick: (filterId: string, optionId: string, remove?: boolean) => void;
    onSort: (optionId: string) => void;
};

export function Filters(props: FiltersProps) {
    const { config, value } = props;
    const { fields, sort = [] } = config;

    function renderFilter(filter: IFilterField) {
        const filterValue = value.filter[filter.id as any];

        const { options = [] } = filter;

        const Cmp = options.length > 7 ? Filter : Filter;

        return (
            <Cmp
                key={filter.id}
                filter={filter}
                value={filterValue}
                onClick={(optionId) => props.onClick(filter.id, optionId)}
                onRemove={(optionId) =>
                    props.onClick(filter.id, optionId, true)
                }
            />
        );
    }

    function renderFilters() {
        return fields.map((filter: IFilterField) => renderFilter(filter));
    }

    function renderSort() {
        return (
            <Sort
                value={value.sort}
                sort={sort}
                onClick={props.onSort}
                onRemove={() => props.onSort('')}
            />
        );
    }

    return (
        <Container
            className='Filters-container'
            data-testid='Filters-container'
        >
            {renderFilters()}
            {renderSort()}
        </Container>
    );
}

export default Filters;
