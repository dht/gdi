import { ItemType, ITimelineConfig } from '../../types';
import articles from './json/d.timeline.articles.json';
import events from './json/d.timeline.events.json';
import images from './json/d.timeline.images.json';
import layouts from './json/d.timeline.layouts.json';
import posts from './json/d.timeline.posts.json';
import ppl from './json/d.timeline.ppl.json';
import tickets from './json/d.timeline.tickets.json';
import widgets from './json/d.timeline.widgets.json';

export const timelines: Record<ItemType, ITimelineConfig> = {
    article: articles,
    event: events,
    image: images,
    layout: layouts,
    post: posts,
    person: ppl,
    ticket: tickets,
    widget: widgets,
};
