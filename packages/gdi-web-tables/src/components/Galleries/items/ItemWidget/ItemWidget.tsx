import React from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemWidgetProps = ItemBaseProps & {
    item: IWidget;
};

export function ItemWidget(props: ItemWidgetProps) {
    const { item } = props;

    return <ItemBase {...props} item={item} />;
}

export default ItemWidget;
