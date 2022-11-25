import { id } from '../ContactUs';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
            phoneNumber: { fieldType: 'text', order: 2 },
        },
        colors: {},
        extra: {
            imageUrl: { fieldType: 'image', isRequired: true, order: 0 },
        },
    },
};
