import { FC } from 'react';
import { ItemArticle } from './ItemArticle/ItemArticle';
import { ItemEvent } from './ItemEvent/ItemEvent';
import { ItemImage } from './ItemImage/ItemImage';
import { ItemImageProps } from './ItemImage/ItemImage';
import { ItemLayout } from './ItemLayout/ItemLayout';
import { ItemLink } from './ItemLink/ItemLink';
import { ItemPage } from './ItemPage/ItemPage';
import { ItemPerson } from './ItemPerson/ItemPerson';
import { ItemPost } from './ItemPost/ItemPost';
import { ItemSale } from './ItemSale/ItemSale';
import { ItemTemplate } from './ItemTemplate/ItemTemplate';
import { ItemTicket } from './ItemTicket/ItemTicket';
import { ItemType } from '../../../types';
import { ItemWidget } from './ItemWidget/ItemWidget';

export const items: Record<ItemType, FC<ItemImageProps>> = {
    // @ts-expect-error
    article: ItemArticle,
    // @ts-expect-error
    event: ItemEvent,
    image: ItemImage,
    layout: ItemLayout,
    line: ItemLink,
    // @ts-expect-error
    page: ItemPage,
    person: ItemPerson,
    post: ItemPost,
    sale: ItemSale,
    ticket: ItemTicket,
    template: ItemTemplate,
    // @ts-expect-error
    widget: ItemWidget,
};
