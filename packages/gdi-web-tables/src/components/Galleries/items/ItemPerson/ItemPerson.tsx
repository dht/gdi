import React, { useEffect, useState } from 'react';
import ItemBase, { ItemBaseProps } from '../_ItemBase/ItemBase';
import { Title } from './ItemPerson.style';

export type ItemPersonProps = ItemBaseProps & {};

export function ItemPerson(props: ItemPersonProps) {
    const { item: person } = props;
    const { firstName, lastName } = person;

    return (
        <ItemBase {...props}>
            <Title className='title'>
                {firstName} {lastName}
            </Title>
        </ItemBase>
    );
}

export default ItemPerson;
