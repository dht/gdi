import { id } from '../Footer';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            copyright: { fieldType: 'text', isRequired: true, order: 0 },
        },
        colors: {},
        extra: {},
    },
};
