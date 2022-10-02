import React, { useContext, useMemo } from 'react';
import Tagger from '../Tagger/Tagger';
import { Button, Search } from '@gdi/web-base-ui';
import {
    Clear,
    Container,
    Count,
    CountText,
    Flex,
    Header,
    HeaderText,
    Views,
} from './TopBar.style';
import { IBarAction } from '../../types';
import { FilterContext } from '../../context/Filter.context';

export type TopBarProps = {
    count: number;
};

export function TopBar(props: TopBarProps) {
    const { count } = props;
    const filterContext = useContext(FilterContext);
    const { callbacks } = filterContext;

    const { search, tag = '', selectedIds } = filterContext.state;

    // const { header, tools, actions = [] } = config;

    // const toolsFiltered = useMemo(() => {
    //     return items.filter((i) => tools?.includes(i.id));
    // }, [tools]);

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
                <Clear onClick={callbacks.onSelectionClear}>clear</Clear>
            </>
        );
    }

    function onGalleryAction(action: IBarAction) {
        // callbacks.onGalleryAction(action.id as ItemActionType);
    }

    function renderAction(action: IBarAction) {
        const { title, iconName } = action;

        return (
            <Button
                key={action.id}
                title={title}
                onClick={() => onGalleryAction(action)}
                iconName={iconName}
                primary
            />
        );
    }

    function renderActions() {
        // return actions.map((action: IBarAction) => renderAction(action));
    }

    return (
        <Container className='TopBar-container' data-testid='TopBar-container'>
            <Header>
                <HeaderText>{'header'}</HeaderText>
                <Count>
                    <CountText>
                        <span>{count}</span> items
                    </CountText>
                    {renderSelectedCount()}
                </Count>
            </Header>
            {/* <Toolbar
                horizontal
                items={toolsFiltered}
                onClick={(option: IToolbarItem) =>
                    callbacks.onToolClick(option.id)
                }
            /> */}
            <Flex />
            <Tagger
                tag={tag}
                onClick={callbacks.onTagClick}
                onClear={callbacks.onTagClear}
            />
            <Flex />
            <Search value={search} onChange={callbacks.onSearch} />
            {/* {renderActions()} */}
        </Container>
    );
}

export default TopBar;
