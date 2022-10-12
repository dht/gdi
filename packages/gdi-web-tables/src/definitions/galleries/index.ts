import { ItemType, IGalleryConfig } from '../../types';
import articles from './json/d.gallery.articles.json';
import events from './json/d.gallery.events.json';
import images from './json/d.gallery.images.json';
import layouts from './json/d.gallery.layouts.json';
import links from './json/d.gallery.links.json';
import pages from './json/d.gallery.pages.json';
import pageInstances from './json/d.gallery.pageInstances.json';
import posts from './json/d.gallery.posts.json';
import ppl from './json/d.gallery.ppl.json';
import sales from './json/d.gallery.sales.json';
import templates from './json/d.gallery.templates.json';
import tickets from './json/d.gallery.tickets.json';
import widgets from './json/d.gallery.widgets.json';

export const galleries: Record<ItemType, IGalleryConfig> = {
    // @ts-expect-error
    article: articles, // @ts-expect-error
    event: events, // @ts-expect-error
    image: images, // @ts-expect-error
    layout: layouts, // @ts-expect-error
    link: links, // @ts-expect-error
    page: pages, // @ts-expect-error
    pageInstance: pageInstances, // @ts-expect-error
    post: posts, // @ts-expect-error
    person: ppl, // @ts-expect-error
    sale: sales, // @ts-expect-error
    template: templates, // @ts-expect-error
    ticket: tickets, // @ts-expect-error
    widget: widgets,
};
