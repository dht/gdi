import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    leads: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.leads,
        icon: 'Calories',
        label: 'Leads',
        groupId: 'doing',
        order: 1.5,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {
    person: {
        itemType: 'person',
        options: [
            {
                id: 'newLead',
                iconName: 'AutoEnhanceOn',
                text: 'new Lead',
                shortKey: {
                    key: 's',
                },
            },
            {
                id: 'newLeadAction',
                iconName: 'LightningBolt',
                text: 'add lead Action',
                shortKey: {
                    key: 'a',
                },
            },
        ],
    },
};
