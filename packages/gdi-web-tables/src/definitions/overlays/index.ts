import { ItemType, ICalendarConfig } from '../../types';
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

export const overlays: Record<ItemType, ICalendarConfig> = {
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
