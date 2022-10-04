import { FC } from 'react';
import { ItemType } from '../../../types';
import { ItemImageProps } from './ItemImage/ItemImage';
import { ItemArticle } from './ItemArticle/ItemArticle';
import { ItemEvent } from './ItemEvent/ItemEvent';
import { ItemImage } from './ItemImage/ItemImage';
import { ItemLayout } from './ItemLayout/ItemLayout';
import { ItemPerson } from './ItemPerson/ItemPerson';
import { ItemPost } from './ItemPost/ItemPost';
import { ItemTicket } from './ItemTicket/ItemTicket';
import { ItemWidget } from './ItemWidget/ItemWidget';

export const items: Record<ItemType, FC<ItemImageProps>> = {
    // @ts-expect-error
    article: ItemArticle,
    event: ItemEvent,
    image: ItemImage,
    layout: ItemLayout,
    person: ItemPerson,
    post: ItemPost,
    ticket: ItemTicket,
    widget: ItemWidget,
};
