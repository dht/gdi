import { ItemType, ICalendarConfig, IOverlayConfig } from '../../types';
import articles from './json/d.overlay.articles.json';
import events from './json/d.overlay.events.json';
import images from './json/d.overlay.images.json';
import layouts from './json/d.overlay.layouts.json';
import links from './json/d.overlay.links.json';
import pages from './json/d.overlay.pages.json';
import pageInstances from './json/d.overlay.pageInstances.json';
import posts from './json/d.overlay.posts.json';
import ppl from './json/d.overlay.ppl.json';
import sales from './json/d.overlay.sales.json';
import templates from './json/d.overlay.templates.json';
import tickets from './json/d.overlay.tickets.json';
import widgets from './json/d.overlay.widgets.json';

export const overlays: Record<ItemType, IOverlayConfig> = {
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
