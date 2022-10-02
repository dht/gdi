import { ItemType, IFilterConfig } from '../../types';
import articles from './json/d.filter.articles.json';
import events from './json/d.filter.events.json';
import images from './json/d.filter.images.json';
import layouts from './json/d.filter.layouts.json';
import posts from './json/d.filter.posts.json';
import ppl from './json/d.filter.ppl.json';
import tickets from './json/d.filter.tickets.json';
import widgets from './json/d.filter.widgets.json';

export const filters: Record<ItemType, IFilterConfig> = {
    //@ts-expect-error
    article: articles, //@ts-expect-error
    event: events, //@ts-expect-error
    image: images, //@ts-expect-error
    layout: layouts, //@ts-expect-error
    post: posts, //@ts-expect-error
    person: ppl, //@ts-expect-error
    ticket: tickets, //@ts-expect-error
    widget: widgets,
};
