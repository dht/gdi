export enum ToolId {
    select = 'select',
    edit = 'edit',
    delete = 'delete',
    favorite = 'favorite',
    temporary = 'temporary',
    tag = 'tag',
}

export const items: any[] = [
    {
        id: ToolId.select,
        text: 'Select',
        iconName: 'FieldEmpty',
    },
    {
        id: ToolId.edit,
        text: 'Edit',
        iconName: 'Edit',
    },
    {
        id: ToolId.delete,
        text: 'Delete',
        iconName: 'Delete',
    },
    {
        id: ToolId.favorite,
        text: 'Mark as Favorite',
        iconName: 'AsteriskSolid',
    },
    {
        id: ToolId.temporary,
        text: 'Mark as Temporary',
        iconName: 'TestBeakerSolid',
    },
    {
        id: ToolId.tag,
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
