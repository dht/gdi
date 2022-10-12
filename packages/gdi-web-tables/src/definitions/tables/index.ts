import { ItemType } from '../../types';
import articles from './json/d.table.articles.json';
import events from './json/d.table.events.json';
import images from './json/d.table.images.json';
import layouts from './json/d.table.layouts.json';
import links from './json/d.table.links.json';
import pages from './json/d.table.pages.json';
import pageInstances from './json/d.table.pageInstances.json';
import posts from './json/d.table.posts.json';
import ppl from './json/d.table.ppl.json';
import sales from './json/d.table.sales.json';
import templates from './json/d.table.templates.json';
import tickets from './json/d.table.tickets.json';
import widgets from './json/d.table.widgets.json';

export const tables: Record<ItemType, ITableConfig> = {
    article: articles,
    event: events,
    image: images,
    layout: layouts,
    link: links,
    page: pages,
    pageInstance: pageInstances,
    post: posts,
    person: ppl,
    sale: sales,
    template: templates,
    ticket: tickets,
    widget: widgets,
};
