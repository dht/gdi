import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemTemplateProps = ItemBaseProps & {};

export function ItemTemplate(props: ItemTemplateProps) {
    return <ItemBase {...props} />;
}

export default ItemTemplate;
