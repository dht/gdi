export const formConfig: IFormConfig = {
    id: 'Update Person',
    sequence: 1,
    layout: {
        flavour: 'twoColumns',
        width: 600,
        flex: [2, 3],
        labelSize: 'compact',
    },
    groups: [
        {
            id: 'basic',
            layoutColumnIndex: 0,
        },
        {
            id: 'extra',
            layoutColumnIndex: 1,
        },
    ],
    fields: [
        {
            id: 'imageUrl',
            fieldType: 'imageUpload',
            groupId: 'basic',
            isRequired: true,
        },
        {
            id: 'title',
            label: 'title',
            fieldType: 'paragraph',
            placeholder: 'Title',
            groupId: 'extra',
        },
        {
            id: 'tags',
            fieldType: 'tags',
            label: 'Tags',
            placeholder: 'Tags',
            optionSelector: '$imageTags',
            groupId: 'extra',
        },
        {
            id: 'ratio',
            label: 'ratio',
            fieldType: 'hidden',
            placeholder: 'Ratio',
            groupId: 'extra',
        },
        {
            id: 'imageId',
            label: 'imageId',
            fieldType: 'hidden',
            placeholder: 'ImageId',
            groupId: 'extra',
        },
    ],
    submit: {
        title: 'Save & close',
    },
};
