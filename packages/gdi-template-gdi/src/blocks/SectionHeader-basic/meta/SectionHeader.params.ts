import { id } from '../SectionHeader';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            text: { fieldType: 'text', order: 0 },
        },
        colors: {},
        extra: {
            id: { fieldType: 'text', order: 0 },
            href: { fieldType: 'text', order: 1 },
            isHidden: { fieldType: 'checkbox', order: 2 },
        },
    },
};
