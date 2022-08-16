import { id } from '../Installation';

export const params: IWidgetParams = {
    id,
    schema: {
        strings: {
            command: { fieldType: 'text', isRequired: true, order: 0 },
            nextStage: { fieldType: 'text', isRequired: true, order: 1 },
            nextStageLink: { fieldType: 'text', isRequired: true, order: 2 },
        },
        colors: {
            background: { fieldType: 'color', order: 0 },
            text: { fieldType: 'color', order: 1 },
        },
        extra: {
            hrefNextStage: { fieldType: 'url', isRequired: true, order: 0 },
        },
    },
};
