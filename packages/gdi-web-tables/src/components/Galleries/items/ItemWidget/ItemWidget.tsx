import React from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemWidgetProps = ItemBaseProps & {};

export function ItemWidget(props: ItemWidgetProps) {
    return <ItemBase {...props} />;
}

export default ItemWidget;
