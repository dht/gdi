import articlesNew from './new/json/d.form.articles.new.json';
import eventsNew from './new/json/d.form.events.new.json';
import imagesNew from './new/json/d.form.images.new.json';
import layoutsNew from './new/json/d.form.layouts.new.json';
import postsNew from './new/json/d.form.posts.new.json';
import pplNew from './new/json/d.form.ppl.new.json';
import ticketsNew from './new/json/d.form.tickets.new.json';
import widgetsNew from './new/json/d.form.widgets.new.json';

import articlesEdit from './edit/json/d.form.articles.edit.json';
import eventsEdit from './edit/json/d.form.events.edit.json';
import imagesEdit from './edit/json/d.form.images.edit.json';
import layoutsEdit from './edit/json/d.form.layouts.edit.json';
import postsEdit from './edit/json/d.form.posts.edit.json';
import pplEdit from './edit/json/d.form.ppl.edit.json';
import ticketsEdit from './edit/json/d.form.tickets.edit.json';
import widgetsEdit from './edit/json/d.form.widgets.edit.json';

import articlesDefault from './default/json/d.form.articles.default.json';
import eventsDefault from './default/json/d.form.events.default.json';
import imagesDefault from './default/json/d.form.images.default.json';
import layoutsDefault from './default/json/d.form.layouts.default.json';
import postsDefault from './default/json/d.form.posts.default.json';
import pplDefault from './default/json/d.form.ppl.default.json';
import ticketsDefault from './default/json/d.form.tickets.default.json';
import widgetsDefault from './default/json/d.form.widgets.default.json';

export const formsNew: Record<string, IFormConfig> = {
    // @ts-expect-error
    articles: articlesNew, // @ts-expect-error
    events: eventsNew, // @ts-expect-error
    images: imagesNew, // @ts-expect-error
    layouts: layoutsNew, // @ts-expect-error
    posts: postsNew, // @ts-expect-error
    ppl: pplNew, // @ts-expect-error
    tickets: ticketsNew, // @ts-expect-error
    widgets: widgetsNew,
};

export const formsEdit: Record<string, IFormConfig> = {
    // @ts-expect-error
    articles: articlesEdit, // @ts-expect-error
    events: eventsEdit, // @ts-expect-error
    images: imagesEdit, // @ts-expect-error
    layouts: layoutsEdit, // @ts-expect-error
    posts: postsEdit, // @ts-expect-error
    ppl: pplEdit, // @ts-expect-error
    tickets: ticketsEdit, // @ts-expect-error
    widgets: widgetsEdit,
};

export const formsNewDefault: Record<string, Json> = {
    articles: articlesDefault,
    events: eventsDefault,
    images: imagesDefault,
    layouts: layoutsDefault,
    posts: postsDefault,
    ppl: pplDefault,
    tickets: ticketsDefault,
    widgets: widgetsDefault,
};
