import { ItemType } from '../../types';
import articles from './json/d.filter.articles.json';
import events from './json/d.filter.events.json';
import images from './json/d.filter.images.json';
import inbox from './json/d.filter.inbox.json';
import layouts from './json/d.filter.layouts.json';
import links from './json/d.filter.links.json';
import pages from './json/d.filter.pages.json';
import pageInstances from './json/d.filter.pageInstances.json';
import posts from './json/d.filter.posts.json';
import ppl from './json/d.filter.ppl.json';
import sales from './json/d.filter.sales.json';
import templates from './json/d.filter.templates.json';
import tickets from './json/d.filter.tickets.json';
import widgets from './json/d.filter.widgets.json';

export const filters: Record<ItemType, IFilterConfig> = {
    //@ts-expect-error
    article: articles, //@ts-expect-error
    event: events, //@ts-expect-error
    image: images, //@ts-expect-error
    inbox: inbox, //@ts-expect-error
    layout: layouts, //@ts-expect-error
    link: links, //@ts-expect-error
    page: pages, //@ts-expect-error
    pageInstance: pageInstances, //@ts-expect-error
    post: posts, //@ts-expect-error
    person: ppl, //@ts-expect-error
    sale: sales, //@ts-expect-error
    template: templates, //@ts-expect-error
    ticket: tickets, //@ts-expect-error
    widget: widgets,
};
