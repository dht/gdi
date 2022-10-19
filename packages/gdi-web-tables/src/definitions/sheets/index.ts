import { ItemType, ISheetConfig } from '../../types';
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
import projects from './json/d.sheet.projects.json';
import sales from './json/d.sheet.sales.json';
import templates from './json/d.sheet.templates.json';
import tickets from './json/d.sheet.tickets.json';
import widgets from './json/d.sheet.widgets.json';

export const sheets: Record<ItemType, ISheetConfig> = {
    // @ts-expect-error
    article: articles, // @ts-expect-error
    event: events, // @ts-expect-error
    image: images, // @ts-expect-error
    inbox: inbox, // @ts-expect-error
    layout: layouts, // @ts-expect-error
    link: links, // @ts-expect-error
    page: pages, // @ts-expect-error
    pageInstance: pageInstances, // @ts-expect-error
    post: posts, // @ts-expect-error
    person: ppl, // @ts-expect-error
    project: projects, // @ts-expect-error
    sale: sales, // @ts-expect-error
    template: templates, // @ts-expect-error
    ticket: tickets, // @ts-expect-error
    widget: widgets,
};
