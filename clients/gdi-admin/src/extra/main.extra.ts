import { initApp as initBiblo } from '@gdi/app-biblo';
import { initApp as initCarts } from '@gdi/app-carts';
import { initApp as initComments } from '@gdi/app-comments';
import { initApp as initCampaigns } from '@gdi/app-campaigns';
import { initApp as initStudio } from '@gdi/app-studio';
import { initApp as initDevtools } from '@gdi/app-devtools';
import { initApp as initEvents } from '@gdi/app-events';
import { initApp as initKnowledge } from '@gdi/app-knowledge';
import { initApp as initLeads } from '@gdi/app-leads';
import { initApp as initMoney } from '@gdi/app-money';
import { initApp as initOrders } from '@gdi/app-orders';
import { initApp as initPpl } from '@gdi/app-ppl';
import { initApp as initProducts } from '@gdi/app-products';
import { initApp as initSales } from '@gdi/app-sales';
import { initApp as initSoundboard } from '@gdi/app-soundboard';
import { initApp as initTasks } from '@gdi/app-tasks';
import { initApp as initThings } from '@gdi/app-things';
import { initApp as initVoice } from '@gdi/app-voice';

export const initializersExtra = {
    biblo: initBiblo,
    carts: initCarts,
    comments: initComments,
    campaigns: initCampaigns,
    studio: initStudio,
    devtools: initDevtools,
    events: initEvents,
    knowledge: initKnowledge,
    leads: initLeads,
    money: initMoney,
    orders: initOrders,
    ppl: initPpl,
    products: initProducts,
    sales: initSales,
    soundboard: initSoundboard,
    tasks: initTasks,
    things: initThings,
    voice: initVoice,
};
