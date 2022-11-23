import { id } from '../MyResume';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            header: { fieldType: 'text', isRequired: true, order: 1 },
            description: { fieldType: 'longText', order: 2 },
        },
        colors: {},
        extra: {
            resumeDatasetId: { fieldType: 'dataset', order: 0 },
        },
    },
};
