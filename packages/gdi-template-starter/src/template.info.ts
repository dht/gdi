import { widgets as blocks } from './blocks';
import { widgets } from './widgets';

const count = Object.keys(blocks).length + Object.keys(widgets).length;

export const templateInfo: ITemplateInfo = {
    id: 'com.usegdi.templates.starter',
    version: '',
    author: {
        name: '',
    },
    widgetsCount: count,
};
