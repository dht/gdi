import { createSelector } from 'reselect';
import { IActiveApp, ISettingsStore } from './types';
import { sortBy, distinctColors } from 'shared-base';

export const $i = (state: any) => state;
const $n = (): null => null;
const $o = (): void => {};

export const $activeApps = createSelector($i, (state: Json): IActiveApp[] => {
    return Object.values(apps)
        .map((app) => {
            const { id, nodes, isRequired } = app;

            let nodeCount = 0;
            let totalSize = 0;

            nodes.forEach((nodeKey) => {
                const data = state[nodeKey] || {};
                nodeCount += Object.keys(data).length;
                totalSize += calcSize(data);
            });

            const description = '';

            return {
                id,
                title: id,
                nodeCount,
                totalSize,
                description,
                isRequired,
            } as IActiveApp;
        })
        .sort(sortBy('title'))
        .map((activeApp: IActiveApp, index) => {
            const color = distinctColors[index];

            return {
                ...activeApp,
                color,
            };
        });
});

export const $activeAppsStats = createSelector(
    $activeApps,
    (activeApps: IActiveApp[]): IActiveAppsStats => {
        const count = activeApps.length;

        const totalNodeCount = activeApps.reduce((acc, app) => {
            return acc + app.nodeCount;
        }, 0);

        const totalSize = activeApps.reduce((acc, app) => {
            return acc + app.totalSize;
        }, 0);

        return {
            count,
            totalNodeCount,
            totalSize,
        };
    }
);

const calcSize = (json: Json) => {
    return JSON.stringify(json).length;
};

type App = {
    id: string;
    nodes: string[];
    isRequired?: boolean;
};

const apps: Record<string, App> = {
    dashboard: {
        id: 'dashboard',
        nodes: ['dashboard'],
        isRequired: true,
    },
    factory: {
        id: 'factory',
        nodes: ['factory'],
    },
    login: {
        id: 'login',
        nodes: ['auth'],
        isRequired: true,
    },
    leads: {
        id: 'leads',
        nodes: ['leads'],
        isRequired: false,
    },
    mixer: {
        id: 'mixer',
        nodes: ['mixer'],
        isRequired: true,
    },
    settings: {
        id: 'settings',
        nodes: ['settings'],
        isRequired: true,
    },
    biblo: {
        id: 'biblo',
        nodes: ['biblo'],
    },
    carts: {
        id: 'carts',
        nodes: ['carts'],
    },
    devtools: {
        id: 'devtools',
        nodes: ['devtools'],
    },
    events: {
        id: 'events',
        nodes: ['events'],
    },
    knowledge: {
        id: 'knowledge',
        nodes: ['knowledge'],
    },
    money: {
        id: 'money',
        nodes: ['money'],
    },

    orders: {
        id: 'orders',
        nodes: ['orders'],
    },
    ppl: {
        id: 'ppl',
        nodes: ['ppl'],
    },
    products: {
        id: 'products',
        nodes: ['products'],
    },
    sales: {
        id: 'sales',
        nodes: ['sales'],
    },
    soundboard: {
        id: 'soundboard',
        nodes: ['soundboard'],
    },
    studio: {
        id: 'studio',
        nodes: ['studio'],
    },
    tasks: {
        id: 'tasks',
        nodes: ['tasks'],
    },
    things: {
        id: 'things',
        nodes: ['things'],
    },
    voice: {
        id: 'voice',
        nodes: ['voice'],
    },
};
