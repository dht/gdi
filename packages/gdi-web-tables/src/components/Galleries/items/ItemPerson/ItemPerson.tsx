import React, { useEffect, useState } from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';

export type ItemPersonProps = ItemBaseProps & {};

export function ItemPerson(props: ItemPersonProps) {
    return <ItemBase {...props} />;
}

export default ItemPerson;
