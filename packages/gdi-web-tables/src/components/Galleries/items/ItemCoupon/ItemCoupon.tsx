import React from 'react';
import { ItemBase, ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemCouponProps = ItemBaseProps & {};

export function ItemCoupon(props: ItemCouponProps) {
    return <ItemBase {...props} />;
}

export default ItemCoupon;
