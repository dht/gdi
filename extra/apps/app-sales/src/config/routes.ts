import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    sales: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.sales,
        icon: 'LightningBolt',
        label: 'Sales',
        groupId: 'marketing',
        order: 3,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {
    person: {
        itemType: 'person',
        options: [
            {
                id: 'newSale',
                iconName: 'AutoEnhanceOn',
                text: 'new Sale',
                shortKey: {
                    key: 's',
                },
            },
            {
                id: 'newSaleAction',
                iconName: 'LightningBolt',
                text: 'add sale Action',
                shortKey: {
                    key: 'a',
                },
            },
        ],
    },
};
