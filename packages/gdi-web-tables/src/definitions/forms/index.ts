import articlesNew from './new/json/d.form.articles.new.json';
import eventsNew from './new/json/d.form.events.new.json';
import imagesNew from './new/json/d.form.images.new.json';
import layoutsNew from './new/json/d.form.layouts.new.json';
import linksNew from './new/json/d.form.links.new.json';
import postsNew from './new/json/d.form.posts.new.json';
import pplNew from './new/json/d.form.ppl.new.json';
import ticketsNew from './new/json/d.form.tickets.new.json';
import widgetsNew from './new/json/d.form.widgets.new.json';

import articlesEdit from './edit/json/d.form.articles.edit.json';
import eventsEdit from './edit/json/d.form.events.edit.json';
import imagesEdit from './edit/json/d.form.images.edit.json';
import layoutsEdit from './edit/json/d.form.layouts.edit.json';
import linksEdit from './edit/json/d.form.links.edit.json';
import postsEdit from './edit/json/d.form.posts.edit.json';
import pplEdit from './edit/json/d.form.ppl.edit.json';
import ticketsEdit from './edit/json/d.form.tickets.edit.json';
import widgetsEdit from './edit/json/d.form.widgets.edit.json';

import articlesDefault from './default/json/d.form.articles.default.json';
import eventsDefault from './default/json/d.form.events.default.json';
import imagesDefault from './default/json/d.form.images.default.json';
import layoutsDefault from './default/json/d.form.layouts.default.json';
import linksDefault from './default/json/d.form.links.default.json';
import postsDefault from './default/json/d.form.posts.default.json';
import pplDefault from './default/json/d.form.ppl.default.json';
import ticketsDefault from './default/json/d.form.tickets.default.json';
import widgetsDefault from './default/json/d.form.widgets.default.json';

export const formsNew: Record<string, IFormConfig> = {
    // @ts-expect-error
    article: articlesNew, // @ts-expect-error
    event: eventsNew, // @ts-expect-error
    image: imagesNew, // @ts-expect-error
    layout: layoutsNew, // @ts-expect-error
    link: linksNew, // @ts-expect-error
    post: postsNew, // @ts-expect-error
    person: pplNew, // @ts-expect-error
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
    post: postsEdit, // @ts-expect-error
    person: pplEdit, // @ts-expect-error
    ticket: ticketsEdit, // @ts-expect-error
    widget: widgetsEdit,
};

export const formsNewDefault: Record<string, Json> = {
    article: articlesDefault,
    event: eventsDefault,
    image: imagesDefault,
    layout: layoutsDefault,
    link: linksDefault,
    post: postsDefault,
    person: pplDefault,
    ticket: ticketsDefault,
    widget: widgetsDefault,
};
