import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    login: `${ROOT}`,
    vizDrawer: `${ROOT}/viz`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.login,
        icon: 'Microphone',
        label: 'Login',
        groupId: 'general',
        showOnSlim: true,
        order: 6,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];
