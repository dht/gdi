import { FC } from 'react';
import { ItemArticle } from './ItemArticle/ItemArticle';
import { ItemCampaign } from './ItemCampaign/ItemCampaign';
import { ItemCart } from './ItemCart/ItemCart';
import { ItemComment } from './ItemComment/ItemComment';
import { ItemCoupon } from './ItemCoupon/ItemCoupon';
import { ItemEvent } from './ItemEvent/ItemEvent';
import { ItemImage } from './ItemImage/ItemImage';
import { ItemImageProps } from './ItemImage/ItemImage';
import { ItemLayout } from './ItemLayout/ItemLayout';
import { ItemInbox } from './ItemInbox/ItemInbox';
import { ItemLead } from './ItemLead/ItemLead';
import { ItemLink } from './ItemLink/ItemLink';
import { ItemOrder } from './ItemOrder/ItemOrder';
import { ItemPage } from './ItemPage/ItemPage';
import { ItemPageInstance } from './ItemPageInstance/ItemPageInstance';
import { ItemPerson } from './ItemPerson/ItemPerson';
import { ItemPost } from './ItemPost/ItemPost';
import { ItemProduct } from './ItemProduct/ItemProduct';
import { ItemProject } from './ItemProject/ItemProject';
import { ItemSale } from './ItemSale/ItemSale';
import { ItemTemplate } from './ItemTemplate/ItemTemplate';
import { ItemTicket } from './ItemTicket/ItemTicket';
import { ItemType } from '../../../types';
import { ItemWidget } from './ItemWidget/ItemWidget';

export const items: Record<ItemType, FC<ItemImageProps>> = {
    // @ts-expect-error
    article: ItemArticle,
    cart: ItemCart,
    campaign: ItemCampaign,
    coupon: ItemCoupon,
    comment: ItemComment, // @ts-expect-error
    event: ItemEvent,
    image: ItemImage,
    inbox: ItemInbox,
    layout: ItemLayout,
    lead: ItemLead,
    link: ItemLink,
    order: ItemOrder, // @ts-expect-error
    page: ItemPage,
    pageInstance: ItemPageInstance,
    person: ItemPerson,
    product: ItemProduct,
    post: ItemPost,
    project: ItemProject,
    sale: ItemSale,
    ticket: ItemTicket,
    template: ItemTemplate, // @ts-expect-error
    widget: ItemWidget,
};
