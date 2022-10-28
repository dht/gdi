import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemLeadProps = ItemBaseProps & {};

export function ItemLead(props: ItemLeadProps) {
    return <ItemBase {...props} />;
}

export default ItemLead;
