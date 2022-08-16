import { ItemType, ICalendarConfig } from '../../types';
import articles from './json/d.calendar.articles.json';
import events from './json/d.calendar.events.json';
import images from './json/d.calendar.images.json';
import layouts from './json/d.calendar.layouts.json';
import posts from './json/d.calendar.posts.json';
import ppl from './json/d.calendar.ppl.json';
import tickets from './json/d.calendar.tickets.json';
import widgets from './json/d.calendar.widgets.json';

export const calendars: Record<ItemType, ICalendarConfig> = {
    article: articles,
    event: events,
    image: images,
    layout: layouts,
    post: posts,
    person: ppl,
    ticket: tickets,
    widget: widgets,
};
