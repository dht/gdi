import { ItemType, ITimelineConfig } from '../../types';
import articles from './json/d.timeline.articles.json';
import events from './json/d.timeline.events.json';
import images from './json/d.timeline.images.json';
import layouts from './json/d.timeline.layouts.json';
import links from './json/d.timeline.links.json';
import pages from './json/d.timeline.pages.json';
import pageInstances from './json/d.timeline.pageInstances.json';
import ppl from './json/d.timeline.ppl.json';
import posts from './json/d.timeline.posts.json';
import sales from './json/d.timeline.sales.json';
import templates from './json/d.timeline.templates.json';
import tickets from './json/d.timeline.tickets.json';
import widgets from './json/d.timeline.widgets.json';

export const timelines: Record<ItemType, ITimelineConfig> = {
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
