import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemImageProps = ItemBaseProps & {};

export function ItemImage(props: ItemImageProps) {
    return <ItemBase {...props} />;
}

export default ItemImage;
