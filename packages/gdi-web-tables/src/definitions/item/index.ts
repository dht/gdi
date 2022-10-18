import { ItemType, ICalendarConfig } from '../../types';
import { itemStructure as articles } from './d.itemStructure.articles';
import { itemStructure as events } from './d.itemStructure.events';
import { itemStructure as images } from './d.itemStructure.images';
import { itemStructure as layouts } from './d.itemStructure.layouts';
import { itemStructure as inbox } from './d.itemStructure.inbox';
import { itemStructure as links } from './d.itemStructure.links';
import { itemStructure as pages } from './d.itemStructure.pages';
import { itemStructure as pageInstances } from './d.itemStructure.pageInstances';
import { itemStructure as posts } from './d.itemStructure.posts';
import { itemStructure as ppl } from './d.itemStructure.ppl';
import { itemStructure as projects } from './d.itemStructure.projects';
import { itemStructure as sales } from './d.itemStructure.sales';
import { itemStructure as templates } from './d.itemStructure.templates';
import { itemStructure as tickets } from './d.itemStructure.tickets';
import { itemStructure as widgets } from './d.itemStructure.widgets';

export const itemStructure: Record<ItemType, string> = {
    article: articles,
    event: events,
    image: images,
    inbox: images,
    layout: layouts,
    inbox: inbox,
    link: links,
    page: pages,
    pageInstance: pageInstances,
    post: posts,
    person: ppl,
    project: projects,
    sale: sales,
    template: templates,
    ticket: tickets,
    widget: widgets,
};
