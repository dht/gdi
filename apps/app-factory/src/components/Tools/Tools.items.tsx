export enum ToolId {
    edit = 'edit',
    delete = 'delete',
    splitHorizontally = 'splitHorizontally',
    splitVertically = 'splitVertically',
    rotate='rotate'
}

export const items: any[] = [
    {
        id: ToolId.splitVertically,
        text: 'Split vertically',
        iconName: 'RowsGroup',
    },
    {
        id: ToolId.splitHorizontally,
        text: 'Split horizontally',
        iconName: 'ColumnLeftTwoThirds',
    },
    {
        id: ToolId.delete,
        text: 'Delete',
        iconName: 'Delete',
    },
    {
        id: ToolId.edit,
        text: 'Edit',
        iconName: 'Edit',
    },
    {
        id: ToolId.rotate,
        text: 'Rotate',
        iconName: 'Rotate',
    },
];
