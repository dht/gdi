import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemSaleProps = ItemBaseProps & {};

export function ItemSale(props: ItemSaleProps) {
    return <ItemBase {...props} />;
}

export default ItemSale;
