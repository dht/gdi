import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemLinkProps = ItemBaseProps & {};

export function ItemLink(props: ItemLinkProps) {
    return <ItemBase {...props} />;
}

export default ItemLink;
