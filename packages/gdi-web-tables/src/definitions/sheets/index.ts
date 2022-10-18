import { ItemType, ICalendarConfig } from '../../types';
import articles from './json/d.sheet.articles.json';
import events from './json/d.sheet.events.json';
import images from './json/d.sheet.images.json';
import inbox from './json/d.sheet.inbox.json';
import layouts from './json/d.sheet.layouts.json';
import links from './json/d.sheet.links.json';
import pages from './json/d.sheet.pages.json';
import pageInstances from './json/d.sheet.pageInstances.json';
import posts from './json/d.sheet.posts.json';
import ppl from './json/d.sheet.ppl.json';
import sales from './json/d.sheet.sales.json';
import templates from './json/d.sheet.templates.json';
import tickets from './json/d.sheet.tickets.json';
import widgets from './json/d.sheet.widgets.json';

export const sheets: Record<ItemType, ICalendarConfig> = {
    article: articles,
    event: events,
    image: images,
    inbox: inbox,
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
