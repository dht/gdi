import React from 'react';
import { Author, AuthorName, Description, Title } from './ItemEvent.style';
import { ItemBase } from '../_ItemBase/ItemBase';
import { MasonryItemProps } from '../../../Masonry/Masonry';

export type ItemEventProps = MasonryItemProps & {
    item: IEvent;
};

export function ItemEvent(props: ItemEventProps) {
    const { item: image } = props;
    const { title } = image;

    return (
        <ItemBase {...props} backgroundColor='#000'>
            <Description className='description'>
                <Title className='title'>{title}</Title>
                <Author className='author'>
                    By <AuthorName></AuthorName>
                </Author>
            </Description>
        </ItemBase>
    );
}

export default ItemEvent;
