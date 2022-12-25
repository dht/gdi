import { ROOT } from './ids';

export const routes: IRoutes = {
    account: `${ROOT}/account`,
    activeApps: `${ROOT}/apps`,
    activeServices: `${ROOT}/services`,
    settings: `${ROOT}/settings`,
    siteProperties: `${ROOT}/siteProperties`,
};

export const menuItems: IMenuItem[] = [];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {};
