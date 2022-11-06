import React, { useMemo } from 'react';
import { Container } from './WrappedFilter.style';
import { FilterBar, FilterContextProvider } from '@gdi/web-tables';

export type WrappedFilterProps = {
    group: any;
    header: string;
    definitions: ICrudDefinitions;
    allOptions: any;
    tags: IOptions;
};

export function WrappedFilter(props: WrappedFilterProps) {
    const { header, definitions, group, allOptions, tags } = props;

    const optionsFilter = useMemo(
        () => ({
            isInitiallyOpen: true,
        }),
        []
    );

    return (
        <Container
            className='WrappedFilter-container'
            data-testid='WrappedFilter-container'
        >
            <FilterContextProvider
                config={definitions.filters}
                data={group.data}
                options={optionsFilter}
                allOptions={allOptions}
                tags={tags}
            >
                <FilterBar
                    header={header}
                    tools={[]}
                    onAction={() => {}}
                    hideParts={[]}
                />
            </FilterContextProvider>
        </Container>
    );
}

export default WrappedFilter;
