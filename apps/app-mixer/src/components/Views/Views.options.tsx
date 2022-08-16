import { IOption } from '@gdi/web-ui';

export const options: IOption[] = [
    {
        id: 'visual',
        text: 'Visual',
        iconName: 'Photo2',
        shortKey: {
            key: '1',
            ctrlKey: true,
        },
        secondaryText: '^1',
    },
    {
        id: 'structure',
        text: 'Structure',
        iconName: 'AlignJustify',
        shortKey: {
            key: '2',
            ctrlKey: true,
        },
        secondaryText: '^2',
    },
];
