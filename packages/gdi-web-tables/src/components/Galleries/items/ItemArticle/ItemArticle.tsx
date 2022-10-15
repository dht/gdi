import React, { useEffect, useState } from 'react';
import { MasonryItemProps } from '../../../Masonry/Masonry';
import { Author, AuthorName, Description, Title } from './ItemArticle.style';
import { ItemBase } from '../_ItemBase/ItemBase';

export type ItemArticleProps = MasonryItemProps & {
    item: IArticle;
};

export function ItemArticle(props: ItemArticleProps) {
    const { item: article } = props;
    const { title, authorName } = article;

    return (
        <ItemBase {...props} backgroundColor='#000' topSectionHeight={200}>
            <Description className='description'>
                <Title className='title'>{title}</Title>
                <Author className='author'>
                    By <AuthorName>{authorName}</AuthorName>
                </Author>
            </Description>
        </ItemBase>
    );
}

export default ItemArticle;
