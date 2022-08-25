import { IShortKey } from '@gdi/platformer';

export const shortKeys: IShortKey[] = [
    {
        key: '`',
        withCtrl: true,
        description: 'Switch to next tool',
    },
    {
        key: '1',
        withCtrl: true,
        description: 'Visual view',
    },
    {
        key: '2',
        withCtrl: true,
        description: 'Structure view',
    },
    {
        key: 'k',
        withCommand: true,
        description: 'Devtools',
    },
];
