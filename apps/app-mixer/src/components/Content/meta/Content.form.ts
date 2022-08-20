import type { IFormConfig } from '@gdi/web-ui';

export const formConfig: IFormConfig = {
    id: 'Update Person',
    sequence: 1,
    layout: {
        flavour: 'threeColumns',
        width: 880,
        flex: [2, 2, 1],
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
        {
            id: 'colors',
            layoutColumnIndex: 2,
        },
    ],
    fields: [
        {
            id: 'imageUrl',
            fieldType: 'imageUpload',
            groupId: 'basic',
        },
        {
            id: 'slogan',
            label: 'Slogan',
            fieldType: 'text',
            placeholder: 'Slogan',
            groupId: 'basic',
        },
        {
            id: 'header',
            fieldType: 'text',
            label: 'Header',
            placeholder: 'Header',
            groupId: 'basic',
        },
        {
            id: 'description',
            fieldType: 'paragraph',
            label: 'Description',
            placeholder: 'Description',
            groupId: 'basic',
        },
        {
            id: 'cta',
            fieldType: 'text',
            label: 'CTA Button',
            placeholder: "Button's text",
            groupId: 'extra',
        },
        {
            id: 'backgroundColor',
            label: 'Background Color',
            fieldType: 'color',
            placeholder: 'Color',
            groupId: 'colors',
            params: {
                size: 50,
            },
        },
    ],
    submit: {
        title: 'Save & close',
    },
};
