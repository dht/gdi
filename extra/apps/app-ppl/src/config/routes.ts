import {
    ICommandBarItem,
    IContextBarItem,
    IMenuItem,
    IRoutes,
} from '@gdi/platformer';
import { ROOT } from './ids';

export const routes: IRoutes = {
    ppl: `${ROOT}`,
};

export const menuItems: IMenuItem[] = [
    {
        path: routes.ppl,
        icon: 'AutoEnhanceOn',
        label: 'People',
        groupId: 'doing',
        order: 2,
    },
];

export const contextBarItems: IContextBarItem[] = [];

export const commandBarItems: ICommandBarItem[] = [];

export const pieMenuItems: Partial<IPieMenuConfigPerItemType> = {
    person: {
        itemType: 'person',

        options: [
            {
                id: 'mail',
                iconName: 'Mail',
                text: 'eMail',
                shortKey: {
                    key: 'm',
                },
            },
            {
                id: 'phone',
                iconName: 'Phone',
                text: 'Call',
                shortKey: {
                    key: 'c',
                },
            },
            {
                id: 'whatsapp',
                iconName: 'OfficeChat',
                text: 'send Whatsapp',
                shortKey: {
                    key: 'w',
                },
            },
            {
                id: 'editNote',
                iconName: 'EditNote',
                text: 'add Note',
                shortKey: {
                    key: 'n',
                },
            },
            {
                id: 'edit',
                iconName: 'Edit',
                text: 'Edit',
                shortKey: {
                    key: 'e',
                },
            },
        ],
    },
};
