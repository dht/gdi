import React from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemLayoutProps = ItemBaseProps & {};

export function ItemLayout(props: ItemLayoutProps) {
    return <ItemBase {...props} />;
}

export default ItemLayout;
