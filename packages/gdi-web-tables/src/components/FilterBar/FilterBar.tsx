import React from 'react';
import Filters from '../Filters/Filters';
import Tagger from '../Tagger/Tagger';
import { Button, Search, Toolbar } from '@gdi/web-base-ui';
import { FilterContext } from '../../context/Filter.context';
import { flatten } from 'shared-base';
import { isEmpty } from 'shared-base';
import { FilterPart, IBarAction } from '../../types';
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
import { useLanguage } from '@gdi/language';
import { useContext, useMemo } from '@gdi/hooks';

export type FilterBarProps = {
    onAction: (actionId: string) => void;
    hideParts?: FilterPart[];
};

export function FilterBar(props: FilterBarProps) {
    const context = useContext(FilterContext);
    const contextSelection = useContext(SelectionContext);
    const { t } = useLanguage();

    const { state, callbacks, config, data = [], multiBar } = context;
    const { selectionMode } = contextSelection;
    const { tag, showFilter, trio, toolId } = state;
    const { header, tools = [], toolbarMode } = multiBar;
    const { search } = trio;

    const hideParts = props.hideParts ?? multiBar.hideParts ?? [];

    const { state: selectedIds, callbacks: callbacksSelection } =
        contextSelection;

    function onToolBarClick(item: any, isExtra?: boolean) {
        const { id } = item;

        if (toolbarMode === 'select' && !isExtra) {
            callbacks.onChangeTool(id);
        } else {
            props.onAction(id);
        }

        // selection mode change
        if (['none', 'single', 'multiple'].includes(id)) {
            contextSelection.callbacks.onChangeMode(id);
        }
    }

    const selectedInnerIds = useMemo(
        () => ({
            select: selectionMode,
        }),
        [selectionMode]
    );

    function renderSelectedCount() {
        if (selectedIds.length === 0) {
            return null;
        }

        return (
            <>
                <Count>
                    <CountText>
                        <span>{selectedIds.length}</span> {t('selected')}
                    </CountText>
                </Count>
                <Clear onClick={callbacksSelection.onSelectionClear}>
                    clear
                </Clear>
            </>
        );
    }

    function renderHeader() {
        if (hideParts.includes('header')) {
            return null;
        }

        return (
            <Header>
                <HeaderText>{header}</HeaderText>
                <Count>
                    <CountText>
                        <span>{data.length}</span> {t('items')}
                    </CountText>
                    {renderSelectedCount()}
                </Count>
            </Header>
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
        if (hideParts.includes('buttons')) {
            return null;
        }

        return (
            <Actions>
                {actions.map((action: IBarAction) => renderAction(action))}
            </Actions>
        );
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

    function renderPreview() {
        if (hideParts.includes('preview')) {
            return null;
        }

        return (
            <>
                <Button
                    iconName='EntryView'
                    onClick={callbacks.togglePreview}
                />
            </>
        );
    }

    function renderFiltering() {
        if (hideParts.includes('filter')) {
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
        if (hideParts.includes('search')) {
            return null;
        }

        return (
            <Search width={160} value={search} onChange={callbacks.onSearch} />
        );
    }

    function renderTagger() {
        if (hideParts.includes('tagging')) {
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

    function renderToolbar() {
        if (hideParts.includes('tools')) {
            return null;
        }

        return (
            <Toolbar
                horizontal
                calculatedWidth
                items={tools}
                selectedId={toolId}
                selectedInnerIds={selectedInnerIds}
                onClick={onToolBarClick}
            />
        );
    }

    return (
        <Container className='TopBar-container' data-testid='TopBar-container'>
            <ContainerBar>
                {renderHeader()}
                {renderToolbar()}
                <Flex />
                {renderTagger()}
                <Flex />
                {renderPreview()}
                {renderFiltering()}
                {renderSearch()}
                {renderActions()}
            </ContainerBar>
            {renderFilters()}
        </Container>
    );
}

export default FilterBar;

export const defaultTools: IOption[] = [
    {
        id: 'select',
        text: 'Select',
        iconName: 'BorderDot',
        options: [
            {
                id: 'none',
                text: 'None',
                iconName: 'LocationCircle',
            },
            {
                id: 'single',
                text: 'Single',
                iconName: 'BorderDot',
            },
            {
                id: 'multiple',
                text: 'Multiple',
                iconName: 'TripleColumn',
            },
        ],
    },
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
