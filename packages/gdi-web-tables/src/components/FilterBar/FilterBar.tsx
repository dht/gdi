import React, { useContext } from 'react';
import Filters from '../Filters/Filters';
import Tagger from '../Tagger/Tagger';
import { Button, Search, Toolbar } from '@gdi/web-base-ui';
import { FilterContext } from '../../context/Filter.context';
import { flatten, isEmpty } from 'lodash';
import { IBarAction } from '../../types';
import { SelectionContext } from '../../context/Selection.context';
import {
    Actions,
    Clear,
    Container,
    ContainerBar,
    ContainerFilter,
    Count,
    CountText,
    Flex,
    Header,
    HeaderText,
} from './FilterBar.style';

export type FilterBarProps = {
    header: string;
    tools?: IOption[];
    onAction: (actionId: string) => void;
    hideSearch?: boolean;
    hideFilter?: boolean;
    hideTagging?: boolean;
};

export function FilterBar(props: FilterBarProps) {
    const {
        header,
        tools = defaultTools,
        hideSearch,
        hideFilter,
        hideTagging,
    } = props;

    const context = useContext(FilterContext);
    const contextSelection = useContext(SelectionContext);

    const { state, callbacks, config, data = [] } = context;
    const { tag, showFilter, trio } = state;
    const { search } = trio;

    const { state: selectedIds, callbacks: callbacksSelection } =
        contextSelection;

    function renderSelectedCount() {
        if (selectedIds.length === 0) {
            return null;
        }

        return (
            <>
                <Count>
                    <CountText>
                        <span>{selectedIds.length}</span> selected
                    </CountText>
                </Count>
                <Clear onClick={callbacksSelection.onSelectionClear}>
                    clear
                </Clear>
            </>
        );
    }

    function renderAction(action: IBarAction) {
        const { title, iconName } = action;

        return (
            <Button
                key={action.id}
                title={title}
                onClick={() => props.onAction(action.id)}
                iconName={iconName}
                primary
            />
        );
    }

    function renderActions() {
        return actions.map((action: IBarAction) => renderAction(action));
    }

    function renderFilters() {
        const style = {
            maxHeight: showFilter ? '300px' : '0px',
            overflow: showFilter ? 'hidden' : 'hidden',
        };

        return (
            <ContainerFilter style={style}>
                <Filters
                    onClick={callbacks.onFilter}
                    onSort={callbacks.onSort}
                    value={trio}
                    config={config}
                />
            </ContainerFilter>
        );
    }

    function renderClearFilter() {
        const empty = isEmpty(flatten(Object.values(trio.filter)));

        if (empty) {
            return null;
        }

        return (
            <Button iconName='ClearFilter' onClick={callbacks.onFilterClear} />
        );
    }

    function renderFiltering() {
        if (hideFilter) {
            return null;
        }

        return (
            <>
                {renderClearFilter()}
                <Button iconName='Filter' onClick={callbacks.toggleFilter} />
            </>
        );
    }

    function renderSearch() {
        if (hideSearch) {
            return null;
        }

        return <Search value={search} onChange={callbacks.onSearch} />;
    }

    function renderTagger() {
        if (hideTagging) {
            return null;
        }

        return (
            <Tagger
                tag={tag}
                onClick={callbacks.onTagClick}
                onClear={callbacks.onTagClear}
            />
        );
    }

    return (
        <Container className='TopBar-container' data-testid='TopBar-container'>
            <ContainerBar>
                <Header>
                    <HeaderText>{header}</HeaderText>
                    <Count>
                        <CountText>
                            <span>{data.length}</span> items
                        </CountText>
                        {renderSelectedCount()}
                    </Count>
                </Header>
                <Toolbar
                    horizontal
                    calculatedWidth
                    items={tools}
                    onClick={(item: any) => props.onAction(item.id)}
                />
                <Flex />
                {renderTagger()}
                <Flex />
                {renderFiltering()}
                {renderSearch()}
                <Actions>{renderActions()}</Actions>
            </ContainerBar>
            {renderFilters()}
        </Container>
    );
}

export default FilterBar;

export const defaultTools: IOption[] = [
    {
        id: 'edit',
        text: 'Edit',
        iconName: 'Edit',
    },
    {
        id: 'delete',
        text: 'Delete',
        iconName: 'Delete',
    },
];

const actions: any[] = [
    {
        id: 'new',
        title: 'New',
        iconName: 'Add',
    },
];
