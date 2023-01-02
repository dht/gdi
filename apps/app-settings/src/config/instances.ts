import { routes } from './routes';
import { SettingsWidgets } from './widgets';

export const instances: IWidgetInstancesByPageList = {
    account: [
        {
            id: 'account',
            widgetId: SettingsWidgets.Account,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    activeApps: [
        {
            id: 'activeApps',
            widgetId: SettingsWidgets.ActiveApps,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    activeServices: [
        {
            id: 'activeServices',
            widgetId: SettingsWidgets.ActiveServices,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    settings: [
        {
            id: 'settings',
            widgetId: SettingsWidgets.Settings,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
    siteProperties: [
        {
            id: 'siteProperties',
            widgetId: SettingsWidgets.SiteProperties,
            position: { y: 1, x: 10 },
            dimension: { y: 48, x: 88 },
        },
    ],
};
