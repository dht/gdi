import { FC } from 'react';
import { PreviewArticle } from './PreviewArticle/PreviewArticle';
import { PreviewCampaign } from './PreviewCampaign/PreviewCampaign';
import { PreviewCart } from './PreviewCart/PreviewCart';
import { PreviewCoupon } from './PreviewCoupon/PreviewCoupon';
import { PreviewComment } from './PreviewComment/PreviewComment';
import { PreviewEvent } from './PreviewEvent/PreviewEvent';
import { PreviewImage } from './PreviewImage/PreviewImage';
import { PreviewImageProps } from './PreviewImage/PreviewImage';
import { PreviewLayout } from './PreviewLayout/PreviewLayout';
import { PreviewInbox } from './PreviewInbox/PreviewInbox';
import { PreviewLink } from './PreviewLink/PreviewLink';
import { PreviewLead } from './PreviewLead/PreviewLead';
import { PreviewOrder } from './PreviewOrder/PreviewOrder';
import { PreviewPage } from './PreviewPage/PreviewPage';
import { PreviewPageInstance } from './PreviewPageInstance/PreviewPageInstance';
import { PreviewPerson } from './PreviewPerson/PreviewPerson';
import { PreviewPost } from './PreviewPost/PreviewPost';
import { PreviewProduct } from './PreviewProduct/PreviewProduct';
import { PreviewProject } from './PreviewProject/PreviewProject';
import { PreviewSale } from './PreviewSale/PreviewSale';
import { PreviewTemplate } from './PreviewTemplate/PreviewTemplate';
import { PreviewTicket } from './PreviewTicket/PreviewTicket';
import { ItemType } from '../../../types';
import { PreviewWidget } from './PreviewWidget/PreviewWidget';

export const previews: Record<ItemType, FC<PreviewImageProps>> = {
    article: PreviewArticle,
    cart: PreviewCart,
    campaign: PreviewCampaign,
    coupon: PreviewCoupon,
    comment: PreviewComment,
    event: PreviewEvent,
    image: PreviewImage,
    inbox: PreviewInbox,
    layout: PreviewLayout,
    lead: PreviewLead,
    link: PreviewLink,
    order: PreviewOrder,
    page: PreviewPage,
    pageInstance: PreviewPageInstance,
    person: PreviewPerson,
    product: PreviewProduct,
    post: PreviewPost,
    project: PreviewProject,
    sale: PreviewSale,
    ticket: PreviewTicket,
    template: PreviewTemplate,
    widget: PreviewWidget,
};
