import React from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemPostProps = ItemBaseProps & {};

export function ItemPost(props: ItemPostProps) {
    return <ItemBase {...props} />;
}

export default ItemPost;
