import { ItemType, IGalleryConfig } from '../../types';
import articles from './json/d.gallery.articles.json';
import events from './json/d.gallery.events.json';
import images from './json/d.gallery.images.json';
import layouts from './json/d.gallery.layouts.json';
import posts from './json/d.gallery.posts.json';
import ppl from './json/d.gallery.ppl.json';
import tickets from './json/d.gallery.tickets.json';
import widgets from './json/d.gallery.widgets.json';

export const galleries: Record<ItemType, IGalleryConfig> = {
    // @ts-expect-error
    article: articles, // @ts-expect-error
    event: events, // @ts-expect-error
    image: images, // @ts-expect-error
    layout: layouts, // @ts-expect-error
    post: posts, // @ts-expect-error
    person: ppl, // @ts-expect-error
    ticket: tickets, // @ts-expect-error
    widget: widgets,
};
