import { ItemType, ICalendarConfig } from '../../types';
import articles from './json/d.calendar.articles.json';
import events from './json/d.calendar.events.json';
import images from './json/d.calendar.images.json';
import inbox from './json/d.calendar.inbox.json';
import layouts from './json/d.calendar.layouts.json';
import links from './json/d.calendar.links.json';
import pages from './json/d.calendar.pages.json';
import pageInstances from './json/d.calendar.pageInstances.json';
import posts from './json/d.calendar.posts.json';
import ppl from './json/d.calendar.ppl.json';
import sales from './json/d.calendar.sales.json';
import templates from './json/d.calendar.templates.json';
import tickets from './json/d.calendar.tickets.json';
import widgets from './json/d.calendar.widgets.json';

export const calendars: Record<ItemType, ICalendarConfig> = {
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
