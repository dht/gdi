import React from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemTicketProps = ItemBaseProps & {};

export function ItemTicket(props: ItemTicketProps) {
    return <ItemBase {...props} />;
}

export default ItemTicket;
