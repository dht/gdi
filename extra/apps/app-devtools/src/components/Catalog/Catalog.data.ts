import * as nodes from '@gdi/datasets';
import { getScreenshotThumb, getScreenshot } from 'shared-base';

type Group = {
    id: string;
    title: string;
    count?: number;
    data?: Json[];
    order: number;
    tagsOptionsPath: string;
    shortKey: IShortKey;
};

export const groups: Group[] = [
    {
        id: 'article',
        title: 'Articles',
        data: Object.values(nodes.articles),
        tagsOptionsPath: 'factory.$articleTags',
        order: 1,
        shortKey: {
            id: 'article',
            key: 'a',
            withCtrl: true,
        },
    },
    {
        id: 'inbox',
        title: 'Inbox',
        data: Object.values(nodes.inboxMessages),
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 2,
        shortKey: {
            id: 'inbox',
            key: 'b',
            withCtrl: true,
        },
    },
    {
        id: 'person',
        title: 'People',
        data: Object.values(nodes.persons),
        tagsOptionsPath: 'ppl.$pplTags',
        order: 3,
        shortKey: {
            id: 'person',
            key: 'c',
            withCtrl: true,
        },
    },
    {
        id: 'widget',
        title: 'Widgets',
        data: $widgets(nodes.libraryWidgets),
        tagsOptionsPath: 'mixer.$widgetTags',
        order: 4,
        shortKey: {
            id: 'widget',
            key: 'd',
            withCtrl: true,
        },
    },
    {
        id: 'event',
        title: 'Events',
        data: Object.values(nodes.events),
        tagsOptionsPath: 'events.$eventsTags',
        order: 5,
        shortKey: {
            id: 'event',
            key: 'e',
            withCtrl: true,
        },
    },
    {
        id: 'template',
        title: 'Templates',
        data: [],
        tagsOptionsPath: 'mixer.$templatesTags',
        order: 6,
        shortKey: {
            id: 'template',
            key: 'f',
            withCtrl: true,
        },
    },
    {
        id: 'pageInstance',
        title: 'Page Instances',
        data: Object.values(nodes.libraryPageInstances),
        tagsOptionsPath: 'mixer.$pageInstancesTags',
        order: 7,
        shortKey: {
            id: 'pageInstance',
            key: 'g',
            withCtrl: true,
        },
    },
    {
        id: 'link',
        title: 'Links',
        data: Object.values(nodes.links),
        tagsOptionsPath: 'biblo.$linksTags',
        order: 8,
        shortKey: {
            id: 'link',
            key: 'h',
            withCtrl: true,
        },
    },
    {
        id: 'image',
        title: 'Images',
        data: Object.values(nodes.libraryImages),
        tagsOptionsPath: 'mixer.$imagesTags',
        order: 9,
        shortKey: {
            id: 'image',
            key: 'i',
            withCtrl: true,
        },
    },
    {
        id: 'project',
        title: 'Projects',
        data: Object.values(nodes.projects),
        tagsOptionsPath: 'tasks.$projectTags',
        order: 10,
        shortKey: {
            id: 'project',
            key: 'j',
            withCtrl: true,
        },
    },
    {
        id: 'cart',
        title: 'Carts',
        data: Object.values(nodes.carts),
        tagsOptionsPath: 'carts.$cartsTags',
        order: 11,
        shortKey: {
            id: 'cart',
            key: 'k',
            withCtrl: true,
        },
    },
    {
        id: 'lead',
        title: 'Leads',
        data: Object.values(nodes.leads),
        tagsOptionsPath: 'leads.$leadsTags',
        order: 12,
        shortKey: {
            id: 'lead',
            key: 'l',
            withCtrl: true,
        },
    },
    {
        id: 'comment',
        title: 'Comments',
        data: Object.values(nodes.comments),
        tagsOptionsPath: 'comments.$commentsTags',
        order: 13,
        shortKey: {
            id: 'comment',
            key: 'm',
            withCtrl: true,
        },
    },
    {
        id: 'campaign',
        title: 'Campaigns',
        data: Object.values(nodes.campaigns),
        tagsOptionsPath: 'campaigns.$campaignsTags',
        order: 14,
        shortKey: {
            id: 'campaign',
            key: 'n',
            withCtrl: true,
        },
    },
    {
        id: 'order',
        title: 'Orders',
        data: Object.values(nodes.orders),
        tagsOptionsPath: 'orders.$ordersTags',
        order: 15,
        shortKey: {
            id: 'order',
            key: 'o',
            withCtrl: true,
        },
    },

    {
        id: 'page',
        title: 'Pages',
        data: Object.values(nodes.libraryPages),
        tagsOptionsPath: 'mixer.$pagesTags',
        order: 16,
        shortKey: {
            id: 'page',
            key: 'p',
            withCtrl: true,
        },
    },

    {
        id: 'coupon',
        title: 'Coupons',
        data: Object.values(nodes.coupons),
        tagsOptionsPath: 'coupons.$couponsTags',
        order: 17,
        shortKey: {
            id: 'coupon',
            key: 'q',
            withCtrl: true,
        },
    },
    {
        id: 'product',
        title: 'Products',
        data: Object.values(nodes.products),
        tagsOptionsPath: 'products.$productsTags',
        order: 18,
        shortKey: {
            id: 'product',
            key: 'r',
            withCtrl: true,
        },
    },

    {
        id: 'sale',
        title: 'Sales',
        data: Object.values(nodes.sales),
        tagsOptionsPath: 'sales.$salesTags',
        order: 19,
        shortKey: {
            id: 'sale',
            key: 's',
            withCtrl: true,
        },
    },

    {
        id: 'ticket',
        title: 'Tickets',
        data: Object.values(nodes.tickets),
        tagsOptionsPath: 'tasks.$ticketsTags',
        order: 20,
        shortKey: {
            id: 'ticket',
            key: 't',
            withCtrl: true,
        },
    },
    {
        id: 'layout',
        title: 'Layouts',
        data: Object.values(nodes.layouts),
        tagsOptionsPath: 'factory.$layoutsTags',
        order: 21,
        shortKey: {
            id: 'layout',
            key: 'u',
            withCtrl: true,
        },
    },
];

export const viewModes: Group[] = [
    {
        id: 'table',
        title: 'Table',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 1,
        shortKey: {
            id: 'table',
            key: '1',
            withCtrl: true,
        },
    },
    {
        id: 'gallery',
        title: 'Gallery',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 2,
        shortKey: {
            id: 'gallery',
            key: '2',
            withCtrl: true,
        },
    },
    {
        id: 'spreadsheet',
        title: 'Spreadsheet',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 3,
        shortKey: {
            id: 'spreadsheet',
            key: '3',
            withCtrl: true,
        },
    },
    {
        id: 'timeline',
        title: 'Timeline',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 4,
        shortKey: {
            id: 'timeline',
            key: '4',
            withCtrl: true,
        },
    },
    {
        id: 'calendar',
        title: 'Calendar',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 5,
        shortKey: {
            id: 'calendar',
            key: '5',
            withCtrl: true,
        },
    },
    {
        id: 'buckets',
        title: 'Buckets',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 6,
        shortKey: {
            id: 'buckets',
            key: '6',
            withCtrl: true,
        },
    },
    {
        id: 'newForm',
        title: 'New form',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 7,
        shortKey: {
            id: 'newForm',
            key: '7',
            withCtrl: true,
        },
    },
    {
        id: 'editForm',
        title: 'Edit form',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 8,
        shortKey: {
            id: 'editForm',
            key: '8',
            withCtrl: true,
        },
    },
    {
        id: 'filters',
        title: 'Filters',
        count: 1,
        tagsOptionsPath: 'dashboard.$inboxTags',
        order: 9,
        shortKey: {
            id: 'filters',
            key: '9',
            withCtrl: true,
        },
    },
];

function $widgets(state: Json) {
    return Object.values(state).map((item: any) => {
        const image = getScreenshot(item);
        const thumb = getScreenshotThumb(item);

        return {
            ...item,
            imageUrl: image.imageUrl,
            imageThumbUrl: thumb.thumbUrl,
            ratio: image.imageRatio,
        };
    });
}
