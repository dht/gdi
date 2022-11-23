import { auth } from '@gdi/store-auth';
import { mixer } from '@gdi/store-mixer';
import { site } from '@gdi/store-site';
import { factory } from '@gdi/store-factory';
import { dashboard } from '@gdi/store-dashboard';
import { settings } from '@gdi/store-settings';
import { biblo } from '@gdi/store-biblo';
import { carts } from '@gdi/store-carts';
import { comments } from '@gdi/store-comments';
import { campaigns } from '@gdi/store-campaigns';
import { devtools } from '@gdi/store-devtools';
import { events } from '@gdi/store-events';
import { knowledge } from '@gdi/store-knowledge';
import { leads } from '@gdi/store-leads';
import { money } from '@gdi/store-money';
import { orders } from '@gdi/store-orders';
import { ppl } from '@gdi/store-ppl';
import { products } from '@gdi/store-products';
import { sales } from '@gdi/store-sales';
import { soundboard } from '@gdi/store-soundboard';
import { studio } from '@gdi/store-studio';
import { tasks } from '@gdi/store-tasks';
import { things } from '@gdi/store-things';
import { voice } from '@gdi/store-voice';
import { weather } from '@gdi/store-weather';

export const actions = {
    ...auth.actions,
    ...mixer.actions,
    ...site.actions,
    ...factory.actions,
    ...dashboard.actions,
    ...settings.actions,
    ...biblo.actions,
    ...carts.actions,
    ...comments.actions,
    ...campaigns.actions,
    ...devtools.actions,
    ...events.actions,
    ...knowledge.actions,
    ...leads.actions,
    ...money.actions,
    ...orders.actions,
    ...ppl.actions,
    ...products.actions,
    ...sales.actions,
    ...soundboard.actions,
    ...studio.actions,
    ...tasks.actions,
    ...things.actions,
    ...voice.actions,
    ...weather.actions,
};

export const selectors = {
    raw: {
        ...auth.selectors.raw,
        ...mixer.selectors.raw,
        ...site.selectors.raw,
        ...factory.selectors.raw,
        ...dashboard.selectors.raw,
        ...settings.selectors.raw,
        ...biblo.selectors.raw,
        ...carts.selectors.raw,
        ...comments.selectors.raw,
        ...campaigns.selectors.raw,
        ...devtools.selectors.raw,
        ...events.selectors.raw,
        ...knowledge.selectors.raw,
        ...leads.selectors.raw,
        ...money.selectors.raw,
        ...orders.selectors.raw,
        ...ppl.selectors.raw,
        ...products.selectors.raw,
        ...sales.selectors.raw,
        ...soundboard.selectors.raw,
        ...studio.selectors.raw,
        ...tasks.selectors.raw,
        ...things.selectors.raw,
        ...voice.selectors.raw,
        ...weather.selectors.raw,
    },
    base: {
        ...auth.selectors.base,
        ...mixer.selectors.base,
        ...site.selectors.base,
        ...factory.selectors.base,
        ...dashboard.selectors.base,
        ...settings.selectors.base,
        ...biblo.selectors.base,
        ...carts.selectors.base,
        ...comments.selectors.base,
        ...campaigns.selectors.base,
        ...devtools.selectors.base,
        ...events.selectors.base,
        ...knowledge.selectors.base,
        ...leads.selectors.base,
        ...money.selectors.base,
        ...orders.selectors.base,
        ...ppl.selectors.base,
        ...products.selectors.base,
        ...sales.selectors.base,
        ...soundboard.selectors.base,
        ...studio.selectors.base,
        ...tasks.selectors.base,
        ...things.selectors.base,
        ...voice.selectors.base,
        ...weather.selectors.base,
    },
    forms: {
        ...auth.selectors.forms,
        ...mixer.selectors.forms,
        ...site.selectors.forms,
        ...factory.selectors.forms,
        ...dashboard.selectors.forms,
        ...settings.selectors.forms,
        ...biblo.selectors.forms,
        ...carts.selectors.forms,
        ...comments.selectors.forms,
        ...campaigns.selectors.forms,
        ...devtools.selectors.forms,
        ...events.selectors.forms,
        ...knowledge.selectors.forms,
        ...leads.selectors.forms,
        ...money.selectors.forms,
        ...orders.selectors.forms,
        ...ppl.selectors.forms,
        ...products.selectors.forms,
        ...sales.selectors.forms,
        ...soundboard.selectors.forms,
        ...studio.selectors.forms,
        ...tasks.selectors.forms,
        ...things.selectors.forms,
        ...voice.selectors.forms,
        ...weather.selectors.forms,
    },
    tables: {
        ...auth.selectors.tables,
        ...mixer.selectors.tables,
        ...site.selectors.tables,
        ...factory.selectors.tables,
        ...dashboard.selectors.tables,
        ...settings.selectors.tables,
        ...biblo.selectors.tables,
        ...carts.selectors.tables,
        ...comments.selectors.tables,
        ...campaigns.selectors.tables,
        ...devtools.selectors.tables,
        ...events.selectors.tables,
        ...knowledge.selectors.tables,
        ...leads.selectors.tables,
        ...money.selectors.tables,
        ...orders.selectors.tables,
        ...ppl.selectors.tables,
        ...products.selectors.tables,
        ...sales.selectors.tables,
        ...soundboard.selectors.tables,
        ...studio.selectors.tables,
        ...tasks.selectors.tables,
        ...things.selectors.tables,
        ...voice.selectors.tables,
        ...weather.selectors.tables,
    },
    options: {
        auth: auth.selectors.options,
        mixer: mixer.selectors.options,
        site: site.selectors.options,
        factory: factory.selectors.options,
        dashboard: dashboard.selectors.options,
        settings: settings.selectors.options,
        biblo: biblo.selectors.options,
        carts: carts.selectors.options,
        comments: comments.selectors.options,
        campaigns: campaigns.selectors.options,
        devtools: devtools.selectors.options,
        events: events.selectors.options,
        knowledge: knowledge.selectors.options,
        leads: leads.selectors.options,
        money: money.selectors.options,
        orders: orders.selectors.options,
        ppl: ppl.selectors.options,
        products: products.selectors.options,
        sales: sales.selectors.options,
        soundboard: soundboard.selectors.options,
        studio: studio.selectors.options,
        tasks: tasks.selectors.options,
        things: things.selectors.options,
        voice: voice.selectors.options,
        weather: weather.selectors.options,
    },
};

export const reducers = devtools.reducers;

export const initialState = devtools.initialState;

export const endpointsConfig = {};

export const clearState = (store: any) => {
    devtools.clearState(store);
};
