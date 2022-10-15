import articlesNew from './new/json/d.form.articles.new.json';
import eventsNew from './new/json/d.form.events.new.json';
import imagesNew from './new/json/d.form.images.new.json';
import layoutsNew from './new/json/d.form.layouts.new.json';
import linksNew from './new/json/d.form.links.new.json';
import pagesNew from './new/json/d.form.pages.new.json';
import pageInstancesNew from './new/json/d.form.pageInstances.new.json';
import postsNew from './new/json/d.form.posts.new.json';
import pplNew from './new/json/d.form.ppl.new.json';
import salesNew from './new/json/d.form.sales.new.json';
import templatesNew from './new/json/d.form.templates.new.json';
import ticketsNew from './new/json/d.form.tickets.new.json';
import widgetsNew from './new/json/d.form.widgets.new.json';

import articlesEdit from './edit/json/d.form.articles.edit.json';
import eventsEdit from './edit/json/d.form.events.edit.json';
import imagesEdit from './edit/json/d.form.images.edit.json';
import layoutsEdit from './edit/json/d.form.layouts.edit.json';
import linksEdit from './edit/json/d.form.links.edit.json';
import pagesEdit from './edit/json/d.form.pages.edit.json';
import pageInstancesEdit from './edit/json/d.form.pageInstances.edit.json';
import postsEdit from './edit/json/d.form.posts.edit.json';
import pplEdit from './edit/json/d.form.ppl.edit.json';
import salesEdit from './edit/json/d.form.sales.edit.json';
import templatesEdit from './edit/json/d.form.templates.edit.json';
import ticketsEdit from './edit/json/d.form.tickets.edit.json';
import widgetsEdit from './edit/json/d.form.widgets.edit.json';

import articlesDefault from './default/json/d.form.articles.default.json';
import eventsDefault from './default/json/d.form.events.default.json';
import imagesDefault from './default/json/d.form.images.default.json';
import layoutsDefault from './default/json/d.form.layouts.default.json';
import linksDefault from './default/json/d.form.links.default.json';
import pagesDefault from './default/json/d.form.pages.default.json';
import pageInstancesDefault from './default/json/d.form.pageInstances.default.json';
import postsDefault from './default/json/d.form.posts.default.json';
import pplDefault from './default/json/d.form.ppl.default.json';
import salesDefault from './default/json/d.form.sales.default.json';
import templatesDefault from './default/json/d.form.templates.default.json';
import ticketsDefault from './default/json/d.form.tickets.default.json';
import widgetsDefault from './default/json/d.form.widgets.default.json';

export const formsNew: Record<string, IFormConfig> = {
    // @ts-expect-error
    article: articlesNew, // @ts-expect-error
    event: eventsNew, // @ts-expect-error
    image: imagesNew, // @ts-expect-error
    layout: layoutsNew, // @ts-expect-error
    link: linksNew, // @ts-expect-error
    page: pagesNew, // @ts-expect-error
    pageInstance: pageInstancesNew, // @ts-expect-error
    post: postsNew, // @ts-expect-error
    person: pplNew, // @ts-expect-error
    sale: salesNew, // @ts-expect-error
    template: templatesNew, // @ts-expect-error
    ticket: ticketsNew, // @ts-expect-error
    widget: widgetsNew,
};

export const formsEdit: Record<string, IFormConfig> = {
    // @ts-expect-error
    article: articlesEdit, // @ts-expect-error
    event: eventsEdit, // @ts-expect-error
    image: imagesEdit, // @ts-expect-error
    layout: layoutsEdit, // @ts-expect-error
    link: linksEdit, // @ts-expect-error
    page: pagesEdit, // @ts-expect-error
    pageInstance: pageInstancesEdit, // @ts-expect-error
    post: postsEdit, // @ts-expect-error
    person: pplEdit, // @ts-expect-error
    sale: salesEdit, // @ts-expect-error
    template: templatesEdit, // @ts-expect-error
    ticket: ticketsEdit, // @ts-expect-error
    widget: widgetsEdit,
};

export const formsNewDefault: Record<string, Json> = {
    article: articlesDefault,
    event: eventsDefault,
    image: imagesDefault,
    layout: layoutsDefault,
    link: linksDefault,
    page: pagesDefault,
    pageInstance: pageInstancesDefault,
    post: postsDefault,
    person: pplDefault,
    sale: salesDefault,
    template: templatesDefault,
    ticket: ticketsDefault,
    widget: widgetsDefault,
};
