import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemCommentProps = ItemBaseProps & {};

export function ItemComment(props: ItemCommentProps) {
    return <ItemBase {...props} />;
}

export default ItemComment;
