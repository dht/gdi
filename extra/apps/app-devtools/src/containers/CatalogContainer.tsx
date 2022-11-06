import React, { useMemo, useState } from 'react';
import Catalog from '../components/Catalog/Catalog';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { actions, selectors } from '../store';
import ItemTypeSwitcher from '../components/ItemTypeSwitcher/ItemTypeSwitcher';
import { groups, viewModes } from '../components/Catalog/Catalog.data';
import { DoubleDeckerSwitch } from '@gdi/web-ui';
import styled from 'styled-components';
import { useLocalStorage } from 'react-use';
import { $allOptions } from '../selectors';
import { factory } from '@gdi/store-factory';
import { get } from 'lodash';

export const CatalogContainer = () => {
    const allOptions = useSelector($allOptions);

    const [viewMode, setViewMode] = useLocalStorage(
        'DEVTOOLS_VIEW_MODE',
        'table'
    );
    const [itemType, setItemType] = useLocalStorage(
        'DEVTOOLS_ITEM_TYPE',
        'article'
    );

    const allOptionsForItemType = get(allOptions, map[itemType as any]);

    const group = useMemo(() => {
        return groups.find((group) => group.id === itemType);
    }, [itemType]);

    const tags = useMemo(() => {
        const tagsOptionsPath = group?.tagsOptionsPath;

        if (!group || !tagsOptionsPath) {
            return [];
        }

        return get(allOptions, tagsOptionsPath);
    }, [group]);

    return (
        <>
            <Catalog
                viewMode={viewMode}
                group={group}
                allOptions={allOptionsForItemType}
                tags={tags}
            />
            <ItemTypeWrapper>
                <DoubleDeckerSwitch
                    items={groups}
                    currentId={itemType}
                    onSelectNode={setItemType}
                />
            </ItemTypeWrapper>
            <ViewModeWrapper>
                <DoubleDeckerSwitch
                    items={viewModes}
                    currentId={viewMode}
                    onSelectNode={setViewMode}
                />
            </ViewModeWrapper>
        </>
    );
};

export const ItemTypeWrapper = styled.div`
    position: absolute;
    top: 25px;
    left: 76px;
`;

export const ViewModeWrapper = styled.div`
    position: absolute;
    top: 25px;
    right: 76px;
`;

const map: any = {
    article: 'factory',
    inbox: 'dashboard',
    person: 'ppl',
    widget: 'mixer',
    event: 'events',
    template: 'mixer',
    pageInstance: 'mixer',
    page: 'mixer',
    link: 'biblo',
    image: 'mixer',
    project: 'tasks',
    cart: 'carts',
    lead: 'leads',
    comment: 'comments',
    campaign: 'campaigns',
    order: 'orders',
    coupon: 'coupons',
    sale: 'sales',
    product: 'products',
    ticket: 'tickets',
    layout: 'layouts',
};
