import React, { useMemo } from 'react';
import { Wrapper } from './WrappedFilter.style';
import { FilterBar, FilterContextProvider } from '@gdi/web-tables';

export type WrappedFilterProps = {
    group: any;
    header: string;
    definitions: ICrudDefinitions;
    allOptions: any;
    tags: IOptions;
};

export function WrappedFilter(props: WrappedFilterProps) {
    const { definitions, group, allOptions, tags } = props;

    const optionsFilter = useMemo(
        () => ({
            isInitiallyOpen: true,
        }),
        []
    );

    return (
        <Wrapper
            className='WrappedFilter-wrapper'
            data-testid='WrappedFilter-wrapper'
        >
            <FilterContextProvider
                config={definitions.filters}
                data={group.data}
                options={optionsFilter}
                allOptions={allOptions}
                multiBar={{} as any}
                tags={tags}
            >
                <FilterBar onAction={() => {}} hideParts={[]} />
            </FilterContextProvider>
        </Wrapper>
    );
}

export default WrappedFilter;
