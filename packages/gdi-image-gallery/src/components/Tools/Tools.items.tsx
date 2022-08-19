export type { IToolbarItem } from '@gdi/web-ui';

export const items: IToolbarItem[] = [
    {
        id: 'select',
        text: 'Select',
        iconName: 'FieldEmpty',
    },
    {
        id: 'edit',
        text: 'Edit',
        iconName: 'Edit',
    },
    {
        id: 'delete',
        text: 'Delete',
        iconName: 'Delete',
    },
    {
        id: 'favorite',
        text: 'Mark as Favorite',
        iconName: 'AsteriskSolid',
    },
    {
        id: 'temporary',
        text: 'Mark as Temporary',
        iconName: 'TestBeakerSolid',
    },
    {
        id: 'tag',
        text: 'Tag',
        iconName: 'Tag',
    },
];

/*
    {
        id: 'pointer',
        text: 'Select',
        iconName: 'SelectAll',
    },
    {
        id: 'add',
        text: 'Add',
        iconName: 'AddTo',
    },
    */
