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
import { tasks } from '@gdi/store-tasks';
import { things } from '@gdi/store-things';
import { voice } from '@gdi/store-voice';

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
    ...tasks.actions,
    ...things.actions,
    ...voice.actions,
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
        ...tasks.selectors.raw,
        ...things.selectors.raw,
        ...voice.selectors.raw,
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
        ...tasks.selectors.base,
        ...things.selectors.base,
        ...voice.selectors.base,
    },
    forms: {
        ...mixer.selectors.forms,
    },
    tables: {
        ...mixer.selectors.tables,
        ...site.selectors.tables,
        ...factory.selectors.tables,
        ...dashboard.selectors.tables,
        ...biblo.selectors.tables,
        ...carts.selectors.tables,
        ...comments.selectors.tables,
        ...campaigns.selectors.tables,
        ...events.selectors.tables,
        ...knowledge.selectors.tables,
        ...leads.selectors.tables,
        ...money.selectors.tables,
        ...orders.selectors.tables,
        ...ppl.selectors.tables,
        ...products.selectors.tables,
        ...sales.selectors.tables,
        ...tasks.selectors.tables,
        ...things.selectors.tables,
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
        tasks: tasks.selectors.options,
        things: things.selectors.options,
        voice: voice.selectors.options,
    },
};

export const reducers = devtools.reducers;

export const initialState = devtools.initialState;

export const endpointsConfig = (connectionType: ConnectionType) =>
    devtools.endpointsConfigOverrides(connectionType);

export const clearState = (store: any) => {
    devtools.clearState(store);
};
